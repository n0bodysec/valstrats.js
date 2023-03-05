import auth from '@feathersjs/authentication-client';
import feathers, { Service as ServiceType } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import constants from './utils/constants';

import { Account } from './account/index';
import { Strats } from './strats/index';
import { User } from './user/index';
import { Utils } from './utils/index';

type Service = ServiceType<unknown>;

export class API
{
	accessToken?: string | undefined;
	strats: Strats = new Strats(this);
	account: Account = new Account(this);
	user: User = new User(this);
	utils: Utils = new Utils(this);

	socket = io(constants.backendUrl, { transports: ['websocket'], upgrade: false });
	client = feathers()
		.configure(socketio(this.socket, { timeout: 10000 }))
		.configure(auth());

	services = {
		users: this.client.service(constants.services.users) as Service,
		characters: this.client.service(constants.services.characters) as Service,
		teams: this.client.service(constants.services.teams) as Service,
		players: this.client.service(constants.services.players) as Service,
		maps: this.client.service(constants.services.maps) as Service,
		tournaments: this.client.service(constants.services.tournaments) as Service,
		regions: this.client.service(constants.services.regions) as Service,
		strats: this.client.service(constants.services.strats) as Service,
		characterAbility: this.client.service(constants.services.characterAbility) as Service,
		uploadStratImage: this.client.service(constants.services.uploadStratImage) as Service,
		userManageSavedFavorites: this.client.service(constants.services.userManageSavedFavorites) as Service,
		userManageLikes: this.client.service(constants.services.userManageLikes) as Service,
		stratUserPost: this.client.service(constants.services.stratUserPost) as Service,
		reportStrat: this.client.service(constants.services.reportStrat) as Service,
		stratUserRanking: this.client.service(constants.services.stratUserRanking) as Service,
		uploadStratVideo: this.client.service(constants.services.uploadStratVideo) as Service,
		stratGenVideoLink: this.client.service(constants.services.stratGenVideoLink) as Service,
		stratsSearch: this.client.service(constants.services.stratsSearch) as Service,
		stratUserRankingMonthly: this.client.service(constants.services.stratUserRankingMonthly) as Service,
		articleCategories: this.client.service(constants.services.articleCategories) as Service,
		articles: this.client.service(constants.services.articles) as Service,
		articleGenerateTranslation: this.client.service(constants.services.articleGenerateTranslation) as Service,
		uploadStratVideoOld: this.client.service(constants.services.uploadStratVideoOld) as Service,
	};

	closeAndExit = () =>
	{
		this.socket.disconnect();
		process.exit(0);
	};

	constructor(accessToken?: string)
	{
		this.accessToken = accessToken;

		// TODO: add jwt expiration check
		this.client.hooks({
			error: {
				all: [async (context) =>
				{
					console.error(`Error in ${context.path} calling ${context.method} method`, context.error);

					return context;
				}],
			},
		});
	}
}
