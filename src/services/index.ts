import { API } from '..';
import constants from '../utils/constants';

export class Services
{
	constructor(private base: API) { }

	find = async (service: string, limit = '-1', skip = 0) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('find', service, { $limit: limit, $skip: skip }, (err: string, res: unknown) =>
		{
			if (err) reject(err);
			else resolve(res);
		});
	});

	uploadStratImage = async (convertedBase: string) => new Promise((resolve, reject) =>
	{
		this.base.socket.emit('create', constants.services.uploadStratImage, { uri: convertedBase }, (err: string, res: unknown) => // convertedBase: data:image/png;base64,...
		{
			if (err) reject(err);
			else resolve(res); // image path: dist/extras/${res.id}
		});
	});
}
