var migration = require('./migration'),
	fs = require('fs'),
	args = process.argv.splice(2),
	ver;

//	specified version
if (args.length) {
	ver = Number(args[0]);
};

migration.update(isNaN(ver) ? undefined : ver);