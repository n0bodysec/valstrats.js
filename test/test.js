const { Valstrats } = require('../index');
const constants = require('../src/utils/constants');
const logger = require('../src/utils/logger');
require('dotenv').config({ path: __dirname + '/.env' });

async function promiseTimeout(ms)
{
	return new Promise(function (resolve, reject) // eslint-disable-line
	{
		setTimeout(resolve, ms);
	});
}

(async () =>
{
	try
	{
		const vdb = new Valstrats(process.env.ACCESS_TOKEN);

		const auth = await vdb.account.login();

		const info = await vdb.strats.getInfo();
		logger(JSON.stringify(info));

		const maps = await vdb.findEndpoint(constants.Endpoints.Maps);
		logger(JSON.stringify(maps));
	}
	catch (e)
	{
		logger(e, 'error');
	}
})();
