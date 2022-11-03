import { API } from '..';

export class Account
{
	constructor(private base: API) { }

	login = async (accessToken?: string) => this.base.client.authenticate({
		strategy: 'jwt',
		accessToken: accessToken ?? this.base.accessToken,
	});

	findSavedStrats = async (limit = 6, skip = 0) => this.base.services.strats.find({
		$limit: limit, $skip: skip, $sort: { createdAt: -1 }, saved: true,
	});

	saveStrat = async (uuid: string, save = true) =>
	{
		if (save) this.base.services.userManageSavedFavorites.create({ stratId: uuid });
		else this.base.services.userManageSavedFavorites.remove(uuid);
	};

	likeStratToggle = async (uuid: string) => this.base.services.userManageLikes.create({ stratId: uuid });

	commentStrat = async (uuid: string, text: string) => this.base.services.stratUserPost.create({ stratId: uuid, text });

	reportStrat = async (stratId: string, reason: string) => this.base.services.reportStrat.create({ stratId, reason });

	static proposeStrat = async () => { throw new Error('proposeStrat() is not production-ready, see: https://github.com/n0bodysec/valstrats.js/discussions/2'); };
}
