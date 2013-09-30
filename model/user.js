var config = '../database/config.json';
var adapter = require(config.adapterPath);
adapter.config(config);

function User(){
	this.find = function(id){
		var sql = 'select * from user where id = ' + id;
		return adapter.query(sql);
	}
	
	this.findById	 = function(id){
		
		var sql = 'select * from user where id="'+id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByAccount	 = function(account){
		
		var sql = 'select * from user where account="'+account+'"';
		
		return adapter.query(sql);
	}
	
	this.findByPassword	 = function(password){
		
		var sql = 'select * from user where password="'+password+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCreatedAt	 = function(created_at){
		
		var sql = 'select * from user where created_at="'+created_at+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUpdatedAt	 = function(updated_at){
		
		var sql = 'select * from user where updated_at="'+updated_at+'"';
		
		return adapter.query(sql);
	}
	
}

module.exports = User;