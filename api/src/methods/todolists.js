const Todolist = require('../models/Todolist');

module.exports = {
  get() {
    return Todolist.fetchAll();
  },

  add(text) {
  	const todo = { text: text , completed: false };
  	return Todolist.save(todo);
  },

  update(id, task) {
  	const todo = { id: id, text: task.text, completed: task.completed };
  	return Todolist.save(todo, {patch: true});
  },

  del(id){
  	const todo = { id: id };
  	return Todolist.where({ id: id }).destroy();
  }
};