/* eslint-disable */

const Valstrats = require('../index');
const constants = require('../src/utils/constants');
require('dotenv').config({ path: __dirname + '/.env' });

(async () =>
{
	try
	{
		const vdb = new Valstrats(process.env.ACCESS_TOKEN);

		const auth = await vdb.account.login();
		const info = await vdb.strats.getInfo();
		const maps = await vdb.services.find(constants.services.maps);
		const strat = await vdb.strats.get('c87d6ae1-ed36-41bd-bebf-f0d7ec17c9cb');
	}
	catch (e)
	{
		console.error(e);
	}
})();
