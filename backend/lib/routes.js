'use strict'
const express = require('express')
const router = express.Router()

const todo = require('./controllers/todoController')

router.post('/todos/add', todo.addTodo)
router.post('/todos/toggle', todo.toggleTodo)
router.post('/todos/remove/:id', todo.removeTodo)
router.get('/todos/all', todo.getAllTodo)

module.exports = router