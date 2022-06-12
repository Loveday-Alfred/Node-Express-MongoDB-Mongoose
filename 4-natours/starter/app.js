const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json()); //middleware

// morgan middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

// custom middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
