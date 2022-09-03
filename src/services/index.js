import constants from '../utils/constants.js';

const services = function services(api)
{
	this.find = async (service, limit = '-1', skip = 0) =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', service, { $limit: limit, $skip: skip }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.uploadStratImage = async (convertedBase) =>
	{
		if (api.authenticated === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('create', constants.services.uploadStratImage, { uri: convertedBase }, (err, res) => // convertedBase: data:image/png;base64,...
			{
				if (err) reject(err);
				else resolve(res); // image path: dist/extras/${res.id}
			});
		});
	};
};

export default services;
