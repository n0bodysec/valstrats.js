const constants = require('../utils/constants');

const account = function account(api)
{
	this.login = async () =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('authenticate', { strategy: 'jwt', accessToken: api.accessToken }, (err, res) =>
			{
				if (err)
				{
					api.setAuthenticated(false);
					reject(err);
				}
				else
				{
					if (res.accessToken) // eslint-disable-line no-lonely-if
					{
						api.setAuthenticated(true);
					}
					else
					{
						api.setAuthenticated(false);
					}
				}

				resolve(res);
			});
		});
	};

	this.findSavedStrats = async (limit = 6, skip = 0) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('find', constants.Endpoints.Strats, { $limit: limit, $skip: skip, $sort: { createdAt: -1 }, saved: true }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.saveStrat = async (uuid, save = true) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit(save === true ? 'create' : 'remove', constants.Endpoints.User.Favorites, (save === true ? ({ stratId: uuid }) : (uuid)), (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.likeStratToggle = async (uuid) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('create', constants.Endpoints.User.Likes, { stratId: uuid }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.commentStrat = async (uuid, text, remove = false) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit(remove === false ? 'create' : 'remove', constants.Endpoints.Strat.UserPost, { stratId: uuid, text: text }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};
};

module.exports = account;
