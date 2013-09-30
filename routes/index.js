//	REST style urls
var app,controller;

function resource(resource){
	app.get('/'+resource,function(req,res){
		controller[resource].execute(req,res,'index');
	});
	app.post('/'+resource,function(req,res){
		controller[resource].execute(req,res,'create');
	});
	app.get('/'+resource+'/new',function(req,res){
		controller[resource].execute(req,res,'n');
	});
	app.get('/'+resource+'/\\d/edit',function(req,res){
		controller[resource].execute(req,res,'edit');
	});
	app.post('/'+resource+'/\\d',function(req,res){
		controller[resource].execute(req,res,'update');
	});
	app.post('/'+resource+'/\\d/del',function(req,res){
		controller[resource].execute(req,res,'del');
	});
	app.get('/'+resource+'/\\d',function(req,res){
		controller[resource].execute(req,res,'show');
	});
}

module.exports = function(a,ctrl){
	app = a,controller = ctrl;
	// alias
	app.get('/', function(req,res){
		controller.index.execute(req,res,'index');
	});
	app.get('/login', function(req,res){
		controller.sessions.execute(req,res,'n');
	});
	app.post('/users/check', function(req,res){
		controller.users.execute(req,res,'check');
	});
	
	// resource
	resource('articles');
	resource('users');
	resource('sessions');
	resource('dailyreports');
};