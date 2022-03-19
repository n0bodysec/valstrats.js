const https = require('https'); // ? Should be replaced by axios?
const constants = require('./constants');

const utils = function utils(api)
{
	this.checkUser = async (username) =>
	{
		return new Promise((resolve, reject) =>
		{
			require('https').get(`https://hitboxking.com/dist/avatars/${username.toLowerCase()}.png`, (res) => resolve(res.statusCode === 200));
		});
	};
};

module.exports = utils;
