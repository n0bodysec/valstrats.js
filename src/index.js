const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');
const logger = require('./utils/logger');
const constants = require('./utils/constants');

const Strats = require('./strats');
const Account = require('./account');
const User = require('./user');

const API = function API(accessToken)
{
	if (!accessToken || accessToken.length === 0)
	{
		throw new Error('missing accessToken');
	}

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
				logger('token expired', 'warn');
				this.authenticated = false;
			}

			return context;
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

	this.findService = async (service, limit = '-1') =>
	{
		if (this.authenticated === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			this.socket.emit('find', service, { $limit: limit }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.closeAndExit = () =>
	{
		this.socket.disconnect();
		process.exit(0);
	};

	this.strats = new Strats(this);
	this.account = new Account(this);
	this.user = new User(this);
};

module.exports = API;
