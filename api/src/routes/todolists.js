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
  	const todo = yield todolist.add(text)
  	this.response.body = todo;
  },

  * put(id) {
  	const task = this.request.body;
  	const todo = yield todolist.update(id, task);
  	this.response.body = todo;
  },

  * del(id) {
  	this.response.body = yield todolist.del(id);
  }
};