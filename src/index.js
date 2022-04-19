import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';
import constants from './utils/constants.js';

import Strats from './strats/index.js';
import Account from './account/index.js';
import User from './user/index.js';
import Services from './services/index.js';
import Utils from './utils/index.js';

const API = function API(accessToken)
{
	this.socket = io(constants.backendUrl, {
		transports: ['websocket'],
		upgrade: false,
	});

	this.client = feathers()
		.configure(socketio(this.socket, { timeout: 10000 }))
		.configure(auth());

	this.client.hooks({
		error(context)
		{
			const { error } = context;

			if (error.message === 'jwt expired')
			{
				this.authenticated = false;
			}

			throw Error(error.message);

			// return context;
		},
	});

	this.authenticated = false;
	this.accessToken = accessToken;

	this.setAuthenticated = (bool) => { this.authenticated = (bool === true); };
	this.getAuthenticated = () => { return this.authenticated; };

	this.setSocket = (socket) => { this.socket = socket; };
	this.getSocket = () => { return this.socket; };

	this.setClient = (client) => { this.client = client; };
	this.getClient = () => { return this.client; };

	this.closeAndExit = () =>
	{
		this.socket.disconnect();
		process.exit(0);
	};

	this.strats = new Strats(this);
	this.account = new Account(this);
	this.user = new User(this);
	this.services = new Services(this);
	this.utils = new Utils(this);
};

export default API;
