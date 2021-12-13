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
};

module.exports = account;
