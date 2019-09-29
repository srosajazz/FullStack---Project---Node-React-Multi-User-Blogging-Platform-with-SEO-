const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//bring routes
const blogRoutes = require('./src/routes/blog');
const authRoutes = require('./src/routes/auth');

// app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);

//cors
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(cors({ origin: `{process.env.CLIENT_URL}` }));
}

//port
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
