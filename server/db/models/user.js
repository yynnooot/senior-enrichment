'use strict';

var Sequelize = require('sequelize')
var db = require('../db')


module.exports = db.define('user', {
  name: Sequelize.STRING,
})
