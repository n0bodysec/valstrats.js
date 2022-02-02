const constants = require('../utils/constants');

const strats = function strats(api)
{
	this.get = async (uuid) =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.services.strats, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getUsersPosts = async (uuid, limit = 10, skip = 0) =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.services.stratUserPost, {
				stratId: uuid, $limit: limit, $skip: skip, $sort: { createdAt: -1 },
			}, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getInfo = async () =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.services.strats, { $limit: 0, $skip: 0, $sort: { createdAt: -1 } }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getData = async (limit = 6, skip = 0) =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.services.strats, { $limit: limit, $skip: skip, $sort: { createdAt: -1 } }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = strats;
