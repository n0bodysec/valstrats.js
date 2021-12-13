const constants = require('../utils/constants');

const strats = function strats(api)
{
	this.get = async (uuid) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.Endpoints.Strats, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getUsersPosts = async (uuid, limit = 10, skip = 0) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.StratEndpoins.UserPost, { stratId: uuid, $limit: limit, $skip: skip, $sort: { createdAt: -1 } }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

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

	this.report = async (stratId, reason) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('create', constants.StratEndpoins.Report., { stratId: stratId, reason: reason }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = strats;
