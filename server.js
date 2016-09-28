'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000
app.set('port', PORT)


//view engine
app.set('view engine', 'pug');


//middlewares
app.use(express.static('public'));


//routes
app.get('/', (req, res) => {
	res.render('index')
})

app.get('/login', (req, res) => {
	res.render('login')
})

app.get('/register', (req, res) => {
	res.render('register')
})



app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
