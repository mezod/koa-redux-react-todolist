const todolist = require('../methods/todolists');

module.exports = {
  * get() {
    this.response.body = yield todolist.get();
  },
};