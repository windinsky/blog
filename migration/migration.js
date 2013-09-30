var config = require('../database/config.json'),
dbAdapter = require(config.adapterPath)
versions = [
//user
	{
		in: function(){
			return dbAdapter.createTable(
				config.database,
				'user',
				{
					id:'INTEGER(10) AUTO_INCREMENT',
					account:'VARCHAR(255)',
					password:'TEXT',
					created_at:'TIMESTAMP NOT NULL DEFAULT now()',
					updated_at:'DATETIME NOT NULL'
				},
				'id'
			);
		},
		out: function(){
			return dbAdapter.dropTable(config.database,'user');
		}
	},
//article
	{
		in: function(){
			return dbAdapter.createTable(
				config.database,
				'article',
				{
					id:'INTEGER(10) AUTO_INCREMENT',
					title:'TEXT',
					body:'TEXT',
					category_id:'INTEGER',
					created_at:'TIMESTAMP NOT NULL DEFAULT now()',
					updated_at:'DATETIME NOT NULL'
				},
				'id'
			);
		},
		out: function(){
			return dbAdapter.dropTable(config.database,'article');
		}
	},
//category
	{
		in: function(){
			return dbAdapter.createTable(
				config.database,
				'category',
				{
					id:'INTEGER(10) AUTO_INCREMENT',
					resource_id:'INTEGER',
					resource_type_id:'INTEGER',
					name:'TEXT',
					created_at:'TIMESTAMP NOT NULL DEFAULT now()',
					updated_at:'DATETIME NOT NULL'
				},
				'id'
			);
		},
		out: function(){
			return dbAdapter.dropTable(config.database,'category');
		}
	},
//resource_type
	{
		in: function(){
			return dbAdapter.createTable(
				config.database,
				'resource_type',
				{
					id:'INTEGER(10) AUTO_INCREMENT',
					name:'TEXT',
					created_at:'TIMESTAMP NOT NULL DEFAULT now()',
					updated_at:'DATETIME NOT NULL'
				},
				'id'
			);
		},
		out: function(){
			return dbAdapter.dropTable(config.database,'resource_type');
		}
	},
	{
		in: function(){
			return dbAdapter.addColumn(config.database,'article','user_id','INTEGER(10)');
		},
		out: function(){
			return dbAdapter.dropColumn(config.database,'article','user_id');
		}
	},
	{
		in: function(){
			return dbAdapter.addColumn(config.database,'article','is_public','INTEGER(1) DEFAULT 0');
		},
		out: function(){
			return dbAdapter.dropColumn(config.database,'article','is_public');
		}
	},
	{
		in: function(){
			return dbAdapter.createTable(
				config.database,
				'daily_report',
				{
					id:'INTEGER(10) AUTO_INCREMENT',
					date:'DATETIME NOT NULL',
					user_id:'INTEGER',
					content:'TEXT',
					created_at:'TIMESTAMP NOT NULL DEFAULT now()',
				},
				'id'
			);
		},
		out: function(){
			return dbAdapter.dropTable(config.database,'daily_report');
		}
	}
];

dbAdapter.config(config);

exports.update = function(){
	var fs = require('fs');
	fs.readFile('./node_modules/schema/version',function(err,data){
		var version = parseInt(data),i=version;
		function up(){
			fs.writeFile('./node_modules/schema/version',i);
			if (i < versions.length) {
				var c = versions[i].in();
				i++;
				c.on('end',up);
			};
		}
		up();
	});
};
exports.update = function(version){
	var fs = require('fs'),
		v = Number(version);	//specified version number, short as v.n.
	
	fs.readFile('./migration/version', function(err, data){
		if (err) {
			throw err;
		};
		var version = Number(data.toString()) || 0, i;
		// if not specified v.n., update to the latest version
		if (isNaN(v)) {
			for (i = version; i < versions.length; i++) {
				versions[i].in();
			};
		}else{
			// if specified v.n. and v.n. is gt current version, update to v.n.
			
			if (v > version) {
				for (i = version + 1; i < v; i++) {
					versions[i].in();
				};
			}else if(v < version){ // else reverse to v.n. 
				for (i = version-1; i >= v; i--){
					versions[i].out();
				};
			}
		}
		
		fs.writeFile('./migration/version',i);
	});
};