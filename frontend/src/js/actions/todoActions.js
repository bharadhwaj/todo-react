import axios from 'axios'
import queryString from 'querystring'

import store from '../store'
import apiConfig from '../config/apiConfig.js'

const apiUrl = apiConfig.method + '://' +  apiConfig.host + ':' + apiConfig.port

export function fetchAllTodos() {
	axios.get(apiUrl+'/todos/all')
	.then(todos => {
		if (todos.data.status === 'SUCCESS') {
			const allTodos = todos.data.allTodos
			store.dispatch({ type : 'ADD_TODO', payload : allTodos})
			store.dispatch({ type : 'LOADED'})
		}
	})
	.catch(err => console.log('Fetch All Todos Error : ', err) )
}


export function adNewTodo(todo) {
	axios.post(
		apiUrl+'/todos/add',
		queryString.stringify({
			id : todo.id,
			text : todo.text,
		})
	)
	.then(todos => {
		if (todos.data.status === 'SUCCESS') {
			const allTodos = [ ...todos.data.allTodos ]
			console.log('NEW TODO', allTodos, allTodos.length)
			store.dispatch({ type : 'ADD_TODO', payload : allTodos})
		}
	})
	.catch(err => console.log('Add New Todo Error : ', err) )
}