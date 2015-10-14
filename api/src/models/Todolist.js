const bookshelf = require('../bookshelf');

const Todolist = bookshelf.Model.extend({
  tableName: 'Todo',
});

module.exports = new Todolist;