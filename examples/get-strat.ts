import { API } from '../src';

(async () =>
{
	try
	{
		const vdb = new API();
		const strat = await vdb.strats.get('c87d6ae1-ed36-41bd-bebf-f0d7ec17c9cb');

		console.log(strat);

		vdb.closeAndExit();
	}
	catch (e)
	{
		console.error(e);
	}
})();
