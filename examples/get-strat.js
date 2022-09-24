import Valstrats from '../index.js';

(async () =>
{
	try
	{
		const vdb = new Valstrats();
		const strat = await vdb.strats.get('c87d6ae1-ed36-41bd-bebf-f0d7ec17c9cb');

		console.log(strat);
	}
	catch (e)
	{
		console.error(e);
	}
})();
