import { IncomingMessage } from 'http';
import * as https from 'https'; // ? Should be replaced by axios?
import { API } from '..';

export class Utils
{
	constructor(private base: API) { }

	static checkUser = async (username: string) => new Promise((resolve) =>
	{
		https.get(`https://hitboxking.com/dist/avatars/${username.toLowerCase()}.png`, (res: IncomingMessage) => resolve(res.statusCode === 200));
	});

	emit = async (event: string, service?: string, query?: unknown): Promise<unknown> => new Promise((resolve, reject) =>
	{
		if (service !== undefined)
		{
			this.base.socket.emit(event, service, query, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		}
		else
		{
			this.base.socket.emit(event, query, (err: string, res: unknown) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		}
	});

	find = async (service: string, limit = '-1', skip = 0) => this.emit('find', service, { $limit: limit, $skip: skip });
}
