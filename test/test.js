/* eslint-disable no-unused-vars */

import Valstrats from '../index.js';
import constants from '../src/utils/constants.js';
import 'dotenv/config';

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
