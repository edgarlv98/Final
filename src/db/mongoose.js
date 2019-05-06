const mongoose = require('mongoose')
const config = require('../config')

var connectionURL = config.connectionURL || process.NODE_ENV

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
