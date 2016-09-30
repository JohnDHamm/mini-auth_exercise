'use strict';

const { Router } = require('express');
// const bcrypt = require('bcrypt')

const router = Router();

const User = require('../models/user')


router.get('/', (req, res) => {
	res.render('index')
})

router.get('/login', (req, res) => {
	res.render('login', {page: 'Login'})
})

router.get('/register', (req, res) => {
	res.render('register', {page: 'Register'})
})

router.post('/register', (req, res, err) => {
	console.log("req.body", req.body);
	User
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
})

// app.get('/logout', (req, res) => {
// 	res.render('logout')
// })

module.exports = router;

