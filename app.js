require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const contactosRouter = require('./controllers/contactos');
const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');



(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('conecto a mongoDB');
  } catch (error) {
    console.log(error);
    console.log('No conecto a mongoDB');
  }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


// frontend routes
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/contacto', express.static(path.resolve('views', 'contacto')));
app.use('/registro', express.static(path.resolve('views', 'signup')));
app.use('/images', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

app.use(morgan('tiny'));
// Rutas Backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/contactos', userExtractor, contactosRouter);


module.exports = app;