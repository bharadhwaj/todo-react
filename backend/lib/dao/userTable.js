'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')
const Users = require('../model/users')

class UserClass {

	createUser(userData) {
		return sequelize.sync()
		.then(() => {
			return Users.create({
				userEmail : userData.userEmail,
				userName : userData.userName,
			})
			.then(user => {
				console.log('\n New entry added: \n ', user.dataValues)
				return ({ status: 'SUCCESS', user : user })
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in createUser: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'param': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'ERROR', error : errors })
			})
			.catch(err => {
				console.log('\n Error in createUser: \n ', err)
				return ({ status : 'ERROR', error : err })
			})
		})

	}

	getUser(userEmail) {
		return sequelize.sync()
		.then(() => {
			return Users.find({
				where : {
					userEmail : userEmail
				}
			})
			.then(user => {
				if (!user) {
					console.log('\n User not found.\n ')
					return ({ status: 'FAILED'})
				}
				console.log('\n Successfully fetched all todos.\n ')
				return ({ status: 'SUCCESS'})
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in getUser: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'parameter': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'ERROR', error : errors })
			})
			.catch(err => {
				console.log('\n Error in getUser: \n ', err)
				return ({ status : 'ERROR', error : err })
			})
		})
	}

	getAllUsers() {
		return sequelize.sync()
		.then(() => {
			return Users.findAll({})
			.then(allUsers => {
				console.log('\n Successfully fetched all users.\n ')
				return ({ status: 'SUCCESS', allUsers : allUsers })
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in getAllUsers: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'parameter': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'ERROR', error : errors })
			})
			.catch(err => {
				console.log('\n Error in getAllUsers: \n ', err)
				return ({ status : 'ERROR', error : err })
			})
		})
	}
}

module.exports = UserClass
