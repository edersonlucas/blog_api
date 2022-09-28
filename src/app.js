const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
// ...

const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');
const postRouter = require('./routes/post.router');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
