import axios from 'axios'

import store from '../store'
import apiConfig from '../config/apiConfig.js'

const apiUrl = apiConfig.method + '://' +  apiConfig.host + ':' + apiConfig.port

export function fetchAllTodos() {
	axios.get(apiUrl+'/todos/all')
	.then(todos => {
		if (todos.data.status === 'SUCCESS') {
			const allTodos = todos.data.allTodos
			console.log('ALL TODOS', allTodos, allTodos.length)
			store.dispatch({ type : 'ADD_TODO', payload : allTodos})
			store.dispatch({ type : 'LOADED'})
		}
	})
	.catch(err => console.log('Fetch All Todos Error : ', err) )
}