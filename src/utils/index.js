const https = require('https'); // ? Should be replaced by axios?

const utils = function utils()
{
	this.checkUser = async (username) =>
	{
		return new Promise((resolve) =>
		{
			https.get(`https://hitboxking.com/dist/avatars/${username.toLowerCase()}.png`, (res) => resolve(res.statusCode === 200));
		});
	};
};

module.exports = utils;
