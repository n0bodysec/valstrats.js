import * as https from 'https'; // ? Should be replaced by axios?

export default class Utils
{
	static checkUser = async (username: string) => new Promise((resolve) =>
	{
		https.get(`https://hitboxking.com/dist/avatars/${username.toLowerCase()}.png`, (res: any) => resolve(res.statusCode === 200));
	});
}
