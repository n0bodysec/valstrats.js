const constants = require('../utils/constants');

const services = function services(api)
{
	this.find = async (service, limit = '-1') =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', service, { $limit: limit }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.uploadStratImage = async (convertedBase) =>
	{
		if (api.getAuthenticated() === false)
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

module.exports = services;
