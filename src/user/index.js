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
			api.socket.emit('get', constants.Endpoints.User.Users, userId, (err, res) =>
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
			api.socket.emit('get', constants.Endpoints.User.Likes, uuid, (err, res) =>
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
			api.socket.emit('get', constants.Endpoints.User.Favorites, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = user;
