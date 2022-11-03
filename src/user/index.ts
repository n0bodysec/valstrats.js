import { API } from '..';

export class User
{
	constructor(private base: API) { }

	get = async (userId: number) => this.base.services.users.get(userId);

	getLikes = async (uuid: string) => this.base.services.userManageLikes.get(uuid);

	getFavorites = async (uuid: string) => this.base.services.userManageSavedFavorites.get(uuid);
}
