'use strict'
const express = require('express')
const router = express.Router()

const todo = require('./controllers/todos')

router.post('/todos/add', todo.addTodo)
router.post('/todos/remove/:id', todo.removeTodo)

module.exports = router