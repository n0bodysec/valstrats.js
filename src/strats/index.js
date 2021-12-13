const constants = require('../utils/constants');

const strats = function strats(api)
{
	this.getInfo = async () =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.Endpoints.Strats, { $limit: 0, $skip: 0, $sort: { createdAt: -1 } }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getData = async (limit = 6, skip = 0) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.Endpoints.Strats, { $limit: limit, $skip: skip, $sort: { createdAt: -1 } }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = strats;
