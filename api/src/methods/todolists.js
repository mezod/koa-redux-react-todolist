const Todolist = require('../models/Todolist');

module.exports = {
  get() {
    return Todolist.fetchAll();
  },

  add(text) {
  	const todo = { text: text , completed: false };
  	return Todolist.save(todo);
  }
};