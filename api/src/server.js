const koa = require('koa');
const router = require('koa-route');
const cors = require('koa-cors');
const app = koa();

const todoRoutes = require('./routes/todolists');

app.use(cors());

app.use(router.get('/todos', todoRoutes.get));

app.listen(3000);