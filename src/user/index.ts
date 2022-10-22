import { API } from '..';
import constants from '../utils/constants';

export class User
{
	constructor(private base: API) { }

	get = async (userId: number) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('get', constants.services.users, userId, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	getLikes = async (uuid: string) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('get', constants.services.userManageLikes, uuid, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	getFavorites = async (uuid: string) =>
	{
		if (!this.base.authenticated) throw new Error('you are not authenticated');

		return new Promise((resolve, reject) =>
		{
			this.base.socket.emit('get', constants.services.userManageSavedFavorites, uuid, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
}
