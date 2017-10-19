'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

var Sequelize = require('sequelize');
var db = require('../index.js')

const Student = db.define('student', {
	firstname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
			}
		}
	},{
	getterMethods: {
		fullname: function(){
			return this.firstname + " " + this.lastname;
		} 
	}
});

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING
	},
	image: {
		type: Sequelize.STRING
	}
});

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
	Student: Student,
	Campus: Campus,
	db
}
