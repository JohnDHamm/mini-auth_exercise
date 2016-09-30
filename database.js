'use strict';

const mongoose = require('mongoose')
// const MONGODB_URL = 'mongodb://localhost:27017/pizzabypug'
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/miniauth' //uses local
// const MONGODB_URL = 'mongodb://<username>:<password>@ds033106.mlab.com:33106/pizzabypug' //enter in Heroku
const MONGODB_URL = 'mongodb://johnauth:16mini@ds047666.mlab.com:47666/miniauth'

mongoose.Promise = Promise //tells mongoose to use global Promise vs. its' internal promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()
