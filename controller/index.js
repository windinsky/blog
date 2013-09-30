var ctrl = require('controller');

var fs = require('fs');
var files = fs.readdirSync('controller');

files.forEach(function(file){
	if(file !== 'index.js'){
		var name = file.match(/^(.*)+\.js$/)[1];
		exports[name] = ctrl.create(require('./'+file));
	}
})

var index = {
	methods:{
		index: function(req,res){
			res.end('hahahaha');
		}
	},
	filter:{
		beforeFilters:[{func: Auth.checkSession}]
	}
};

exports['index'] = ctrl.create(index);