import { API } from '..';

export class Strats
{
	constructor(private base: API) { }

	get = async (uuid: string) => this.base.services.strats.get(uuid);

	getUsersPosts = async (uuid: string, limit = 10, skip = 0) => this.base.services.stratUserPost.find({
		query: {
			stratId: uuid, $limit: limit, $skip: skip, $sort: { createdAt: 1 },
		},
	});

	getInfo = async () => this.base.services.strats.find({ query: { $limit: 0, $skip: 0, $sort: { createdAt: -1 } } });

	getData = async (limit = 6, skip = 0) => this.base.services.strats.find({ query: { $limit: limit, $skip: skip, $sort: { createdAt: -1 } } });

	search = async (keywords: string) => this.base.services.stratsSearch.find({ query: { keywords } });
}
