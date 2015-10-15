const todolist = require('../methods/todolists');

module.exports = {
  * get() {
    this.response.body = yield todolist.get();
  },

  * post() {
  	const text = this.request.body.text;
  	if(!text){
  		this.response.status = 400;
  		this.response.body = { success: false, message: 'title required' };
  		return;
  	}
  	//var todo = { text: text, complete: false };
  	var todo = yield todolist.add(text)
  	this.response.body = todo;
  }
};