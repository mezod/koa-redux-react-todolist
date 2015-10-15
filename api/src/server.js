const koa = require('koa');
const router = require('koa-route');
const cors = require('koa-cors');
const bodyparser = require('koa-bodyparser');
const app = koa();

const todoRoutes = require('./routes/todolists');

app.use(cors());
app.use(bodyparser());

app.use(router.get('/todos', todoRoutes.get));
app.use(router.post('/todos', todoRoutes.post));

app.listen(3000);