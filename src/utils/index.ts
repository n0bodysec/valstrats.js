import { IncomingMessage } from 'http';
import * as https from 'https'; // ? Should be replaced by axios?

export class Utils
{
	static checkUser = async (username: string) => new Promise((resolve) =>
	{
		https.get(`https://hitboxking.com/dist/avatars/${username.toLowerCase()}.png`, (res: IncomingMessage) => resolve(res.statusCode === 200));
	});
}
