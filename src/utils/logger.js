const log4js = require('log4js');

/**
 * Configure logger, append text in console and save to file.
 * Docs about log4js: https://log4js-node.github.io/log4js-node/
 */
log4js.configure({
	appenders: {
		/*file: {
			type: 'file',
			filename: 'logs/log.log',
			layout: {
				type: 'pattern',
				pattern: '[%d{ISO8601_WITH_TZ_OFFSET}] [%p] [%c] %m',
			},
		},*/
		console: {
			type: 'console',
			layout: {
				type: 'pattern',
				pattern: '%[[%d{ISO8601_WITH_TZ_OFFSET}] [%p] [%c]%] %m',
			},
		},
	},
	categories: { default: { appenders: ['console'], level: 'info' } },
});

async function log(moduleName, msg, type)
{
	try
	{
		const logger = log4js.getLogger(moduleName);
		logger[type](`${msg}`);
	}
	catch (err)
	{
		console.log(`${err.message} / ${err.stack})`);
	}
}

function getCallerFile()
{
	try
	{
		const err = new Error();
		let callerfile;

		Error.prepareStackTrace = function (e, stack)
		{
			return stack;
		};

		const currentfile = err.stack.shift().getFileName();

		while (err.stack.length)
		{
			callerfile = err.stack.shift().getFileName();

			if (currentfile !== callerfile) return callerfile;
		}
	}
	catch (err)
	{
		return undefined;
	}
	return undefined;
}

module.exports = function (msg, type = 'info')
{
	return log(require('path').basename(getCallerFile()), msg, type);
};
