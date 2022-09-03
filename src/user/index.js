import constants from '../utils/constants.js';

const user = function user(api)
{
	this.get = async (userId) =>
	{
		if (api.authenticated === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.services.users, userId, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getLikes = async (uuid) =>
	{
		if (api.authenticated === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.services.userManageLikes, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.getFavorites = async (uuid) =>
	{
		if (api.authenticated === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('get', constants.services.userManageSavedFavorites, uuid, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

export default user;
