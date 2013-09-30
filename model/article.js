var config = '../database/config.json';
var adapter = require(config.adapterPath);
adapter.config(config);

function Article(){
	this.find = function(id){
		var sql = 'select * from article where id = ' + id;
		return adapter.query(sql);
	}
	
	this.findById	 = function(id){
		
		var sql = 'select * from article where id="'+id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByTitle	 = function(title){
		
		var sql = 'select * from article where title="'+title+'"';
		
		return adapter.query(sql);
	}
	
	this.findByBody	 = function(body){
		
		var sql = 'select * from article where body="'+body+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCategoryId	 = function(category_id){
		
		var sql = 'select * from article where category_id="'+category_id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCreatedAt	 = function(created_at){
		
		var sql = 'select * from article where created_at="'+created_at+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUpdatedAt	 = function(updated_at){
		
		var sql = 'select * from article where updated_at="'+updated_at+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUserId	 = function(user_id){
		
		var sql = 'select * from article where user_id="'+user_id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByIsPublic	 = function(is_public){
		
		var sql = 'select * from article where is_public="'+is_public+'"';
		
		return adapter.query(sql);
	}
	
}

module.exports = Article;