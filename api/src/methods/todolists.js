const Todolist = require('../models/Todolist');

module.exports = {
  get() {
    return Todolist.fetchAll();
  }
};