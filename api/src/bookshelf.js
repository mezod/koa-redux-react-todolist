const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'todolist',
    charset: 'utf8',
  },
});

module.exports = require('bookshelf')(knex);