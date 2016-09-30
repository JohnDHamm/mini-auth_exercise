'use strict';

const express = require('express');
const routes = require('./routes/')
const { connect } = require('./database')
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000
app.set('port', PORT)


//view engine
app.set('view engine', 'pug');


//middlewares
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

