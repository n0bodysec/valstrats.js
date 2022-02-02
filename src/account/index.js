const constants = require('../utils/constants');

const account = function account(api)
{
	this.login = async (accessToken = null) =>
	{
		return new Promise((resolve, reject) =>
		{
			api.socket.emit('authenticate', { strategy: 'jwt', accessToken: accessToken ?? api.accessToken }, (err, res) =>
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
			api.socket.emit('find', constants.services.strats, {
				$limit: limit, $skip: skip, $sort: { createdAt: -1 }, saved: true,
			}, (err, res) =>
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
			api.socket.emit(save === true ? 'create' : 'remove', constants.services.userManageSavedFavorites, (save === true ? ({ stratId: uuid }) : (uuid)), (err, res) =>
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
			api.socket.emit('create', constants.services.userManageLikes, { stratId: uuid }, (err, res) =>
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
			api.socket.emit(remove === false ? 'create' : 'remove', constants.services.stratUserPost, { stratId: uuid, text: text }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.reportStrat = async (stratId, reason) =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			api.socket.emit('create', constants.services.reportStrat, { stratId: stratId, reason: reason }, (err, res) =>
			{
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	this.proposeStrat = async () =>
	{
		if (api.getAuthenticated() === false)
		{
			throw new Error('you are not authenticated');
		}

		return new Promise((resolve, reject) =>
		{
			throw new Error('proposeStrat() is not production-ready, see: https://github.com/n0bodysec/valstrats.js/discussions/2');
		});
	};
};

module.exports = account;
