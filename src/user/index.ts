import { API } from '..';
import constants from '../utils/constants';

export class User
{
	constructor(private base: API) { }

	get = async (userId: number) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('get', constants.services.users, userId, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	getLikes = async (uuid: string) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('get', constants.services.userManageLikes, uuid, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	getFavorites = async (uuid: string) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('get', constants.services.userManageSavedFavorites, uuid, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});
}
