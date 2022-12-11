const express = require('express');
const loginRouter = require('./routes/router.login');

const app = express();

app.use(express.json());
app.use('/', loginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
