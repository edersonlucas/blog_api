const express = require('express');

// ...

const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
