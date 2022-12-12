const express = require('express');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/categories');

const app = express();

app.use(express.json());
app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoryRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
