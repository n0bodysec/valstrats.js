import { API } from '..';
import constants from '../utils/constants';

export class Strats
{
	constructor(private base: API) { }

	get = async (uuid: string) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('get', constants.services.strats, uuid, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	getUsersPosts = async (uuid: string, limit = 10, skip = 0) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('find', constants.services.stratUserPost, {
			stratId: uuid, $limit: limit, $skip: skip, $sort: { createdAt: -1 },
		}, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	getInfo = async () => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('find', constants.services.strats, { $limit: 0, $skip: 0, $sort: { createdAt: -1 } }, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	getData = async (limit = 6, skip = 0) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('find', constants.services.strats, { $limit: limit, $skip: skip, $sort: { createdAt: -1 } }, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});
}
