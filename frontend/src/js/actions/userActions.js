import axios from 'axios'
import queryString from 'querystring'
import { hashHistory } from 'react-router'

import store from '../store'
import apiConfig from '../config/apiConfig.js'

const apiUrl = apiConfig.method + '://' +  apiConfig.host + ':' + apiConfig.port

export function loginUser(userData) {
	axios.post(
		apiUrl+'/users/add',
		queryString.stringify({
			userEmail : userData.userEmail,
			userName : userData.userName,
		})
	)
	.then(user => {
		console.log('USER DATA', user.data)
		if (user.data.status === 'SUCCESS') {
			Materialize.toast('User successfully registered and logged in!', 2000, 'green')
		} else {
			Materialize.toast('User successfully logged in!', 2000, 'green')
		}
		localStorage.setItem('userData', JSON.stringify(userData));
		store.dispatch({ type : 'LOGIN', payload : userData})
		hashHistory.push('/')
	})
	.catch(err => console.log('Add New User Error : ', err) )

}

export function logoutUser(userData) {
	localStorage.removeItem('userData');
	store.dispatch({ type : 'RESET_COUNT'})
	store.dispatch({ type : 'LOGOUT'})
}

export function checkLogin() {
	let userData = JSON.parse(localStorage.getItem('userData'))
	if (userData && userData.isLoggedIn) {
		store.dispatch({ type : 'LOGIN', payload : userData})
	}
}
