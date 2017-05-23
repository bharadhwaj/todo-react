'use strict'
const express = require('express')
const router = express.Router()

const todo = require('./controllers/todoController')
<<<<<<< HEAD
const user = require('./controllers/userController')

router.post('/todos/add', todo.addTodo)
router.post('/todos/toggle', todo.toggleTodo)
router.get('/todos/remove/:id', todo.removeTodo)
router.get('/todos/all/:email', todo.getAllTodo)

router.post('/users/add', user.addUser)
router.get('/users/find/:email', user.findUser)
router.get('/users/all', user.getAllUsers)

module.exports = router
=======

router.post('/todos/add', todo.addTodo)
router.post('/todos/toggle', todo.toggleTodo)
router.post('/todos/remove/:id', todo.removeTodo)
router.get('/todos/all', todo.getAllTodo)

module.exports = router
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
