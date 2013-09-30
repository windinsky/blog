var config = '../database/config.json';
var adapter = require(config.adapterPath);
adapter.config(config);

function DailyReport(){
	this.find = function(id){
		var sql = 'select * from daily_report where id = ' + id;
		return adapter.query(sql);
	}
	
	this.findById	 = function(id){
		
		var sql = 'select * from daily_report where id="'+id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByDate	 = function(date){
		
		var sql = 'select * from daily_report where date="'+date+'"';
		
		return adapter.query(sql);
	}
	
	this.findByUserId	 = function(user_id){
		
		var sql = 'select * from daily_report where user_id="'+user_id+'"';
		
		return adapter.query(sql);
	}
	
	this.findByContent	 = function(content){
		
		var sql = 'select * from daily_report where content="'+content+'"';
		
		return adapter.query(sql);
	}
	
	this.findByCreatedAt	 = function(created_at){
		
		var sql = 'select * from daily_report where created_at="'+created_at+'"';
		
		return adapter.query(sql);
	}
	
}

module.exports = DailyReport;