var config = '../database/config.json';
var adapter = require(config.adapterPath);
adapter.config(config);

function ResourceType(){
	this.find = function(id){
		var sql = 'select * from resource_type where id = ' + id;
		return adapter.query(sql);
	}
	
	this.findById	 = function(id){
		
		var sql = 'select * from resource_type where id="'+id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByName	 = function(name){
		
		var sql = 'select * from resource_type where name="'+name+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCreatedAt	 = function(created_at){
		
		var sql = 'select * from resource_type where created_at="'+created_at+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUpdatedAt	 = function(updated_at){
		
		var sql = 'select * from resource_type where updated_at="'+updated_at+'"';
		
		return adapter.query(sql);
	}
	
}

module.exports = ResourceType;