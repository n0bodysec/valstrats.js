import io from 'socket.io-client';
import constants from './utils/constants';

import { Account } from './account/index';
import { Services } from './services/index';
import { Strats } from './strats/index';
import { User } from './user/index';
import { Utils } from './utils/index';

export class API
{
	socket = io(constants.backendUrl, { transports: ['websocket'], upgrade: false });
	accessToken?: string | undefined;
	strats: Strats = new Strats(this);
	account: Account = new Account(this);
	user: User = new User(this);
	services: Services = new Services(this);
	utils: Utils = new Utils();

	closeAndExit = () =>
	{
		this.socket.disconnect();
		process.exit(0);
	};

	constructor(accessToken?: string)
	{
		this.accessToken = accessToken;

		// TODO: add jwt expiration check
	}
}
