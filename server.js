'use strict';

const express = require('express');
const routes = require('./routes/')

const app = express();

const bodyParser = require('body-parser');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const { connect } = require('./database')


const PORT = process.env.PORT || 3000
app.set('port', PORT)


//view engine
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
	app.locals.pretty = true;
}

app.locals.errors = {} // errors & body added to avoid guard statements
app.locals.body = {} // i.e. value=(body && body.name) vs. value=body.name

//middlewares
app.use(session({
	store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
	secret: 'miniauthsupersecretsaltkey'
}))

app.use((req, res, next) => {
	app.locals.email = req.session.email
	next()
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(routes);

connect()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on port: ${PORT}`)
    )
  })
  .catch(console.error)
