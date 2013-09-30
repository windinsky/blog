var config = '../database/config.json';
var adapter = require(config.adapterPath);
adapter.config(config);

function Category(){
	this.find = function(id){
		var sql = 'select * from category where id = ' + id;
		return adapter.query(sql);
	}
	
	this.findById	 = function(id){
		
		var sql = 'select * from category where id="'+id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByResourceId	 = function(resource_id){
		
		var sql = 'select * from category where resource_id="'+resource_id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByResourceTypeId	 = function(resource_type_id){
		
		var sql = 'select * from category where resource_type_id="'+resource_type_id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByName	 = function(name){
		
		var sql = 'select * from category where name="'+name+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCreatedAt	 = function(created_at){
		
		var sql = 'select * from category where created_at="'+created_at+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUpdatedAt	 = function(updated_at){
		
		var sql = 'select * from category where updated_at="'+updated_at+'"';
		
		return adapter.query(sql);
	}
	
}

module.exports = Category;