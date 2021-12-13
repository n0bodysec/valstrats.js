const constants = require('../utils/constants');

const user = function user(api)
{
	this.get = async (userId) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.UserEndpoints.Users, userId, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getLikes = async (uuid) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.UserEndpoints.Likes, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getFavorites = async (uuid) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.UserEndpoints.Favorites, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = user;
