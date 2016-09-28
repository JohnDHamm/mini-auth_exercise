'use strict';

const { Router } = require('express');
// const bcrypt = require('bcrypt')

const router = Router();

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/login', (req, res) => {
	res.render('login', {page: 'Login'})
})

router.get('/register', (req, res) => {
	res.render('register', {page: 'Register'})
})

// app.get('/logout', (req, res) => {
// 	res.render('logout')
// })

module.exports = router;
