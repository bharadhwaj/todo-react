'use strict'
const UserClass = require('../dao/userTable')
const user = new UserClass()

module.exports = {

	addUser(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		let userData = req.body
		user.createUser(userData)
				.then(userResponse => { res.json(userResponse) })
	},

	getAllUsers(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		user.getAllUsers()
				.then(userResponse => { res.json(userResponse) })
	},

	findUser(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		user.getUser(req.params.email)
				.then(response => { res.json(response) })
	}

}
