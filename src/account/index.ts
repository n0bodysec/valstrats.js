import { API } from '..';
import constants from '../utils/constants';

export class Account
{
	constructor(private base: API) { }

	login = async (accessToken = null) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('authenticate', { strategy: 'jwt', accessToken: accessToken ?? this.base.accessToken }, (err: string, res: any) =>
		{
			if (err)
			{
				this.base.authenticated = false;
				reject(err);
			}
			else this.base.authenticated = res.accessToken != null;

			resolve(res);
		});
	});

	findSavedStrats = async (limit = 6, skip = 0) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('find', constants.services.strats, {
				$limit: limit, $skip: skip, $sort: { createdAt: -1 }, saved: true,
			}, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	saveStrat = async (uuid: string, save = true) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit(save === true ? 'create' : 'remove', constants.services.userManageSavedFavorites, (save === true ? ({ stratId: uuid }) : (uuid)), (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	likeStratToggle = async (uuid: string) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('create', constants.services.userManageLikes, { stratId: uuid }, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	commentStrat = async (uuid: string, text: string, remove = false) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit(remove === false ? 'create' : 'remove', constants.services.stratUserPost, { stratId: uuid, text }, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	reportStrat = async (stratId: string, reason: string) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('create', constants.services.reportStrat, { stratId, reason }, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	proposeStrat = async () =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise(() =>
		{
			throw new Error('proposeStrat() is not production-ready, see: https://github.com/n0bodysec/valstrats.js/discussions/2');
		});
	};
}
