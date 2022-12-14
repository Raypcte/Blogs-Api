const express = require('express');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/categories');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());
app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
