const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const knex = require('./knex/knex.js');
const User = require('./app/models/user.js');

app.get('/', (req, res) => {
  res.status(200).send('Prepped Server is Running!');
});

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers',
  );
  next();
});

// Routes
app.post('/signup', User.signup);
app.post('/login', User.login);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
