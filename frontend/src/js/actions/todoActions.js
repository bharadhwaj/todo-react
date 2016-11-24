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
		} else {
			Materialize.toast('Sorry! Some error occured please try later.', 2000, 'red')
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
		console.log('TODOS DATA', todos.data)
		if (todos.data.status === 'SUCCESS') {
			Materialize.toast('New card added successfully!', 2000, 'green')
			const currentTodo = [ todos.data.todo ]
			store.dispatch({ type : 'ADD_TODO', payload : currentTodo})
		} else {
			Materialize.toast('Sorry! Some error occured please try later.', 2000, 'red')
		}
	})
	.catch(err => console.log('Add New Todo Error : ', err) )
}


export function toggleTodo(todo, status) {
	axios.post(
		apiUrl+'/todos/toggle',
		queryString.stringify({
			id : todo.id,
			complete : !todo.complete,
		})
	)
	.then(todos => { 
		if (status === 'complete') {
			Materialize.toast('Card successfully moved to To-Do.', 2000, 'light-blue')
		} else if (status === 'incomplete') {
			Materialize.toast('Card successfully moved to Completed.', 2000, 'light-blue')
		}
		store.dispatch({ type : 'TOGGLE_TODO', payload : todo })
	})
	.catch(err => console.log('Add New Todo Error : ', err) )
}

export function deleteTodo(todo) {
	axios.post(apiUrl+'/todos/remove/'+todo.id)
	.then(todos => {
		if (todos.data.status === 'SUCCESS') {
			Materialize.toast('Card removed successfully.', 2000, 'amber accent-2')
			store.dispatch({ type : 'REMOVE_TODO', payload : todo })
		} else {
			Materialize.toast('Sorry! Some error occured please try later.', 2000, 'red')
		}
	})
	.catch(err => console.log('Fetch All Todos Error : ', err) )
}