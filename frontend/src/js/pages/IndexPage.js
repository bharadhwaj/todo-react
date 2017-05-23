import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import { hashHistory } from 'react-router'
=======
<<<<<<< HEAD
import { hashHistory } from 'react-router'

import AddTodo from '../components/AddTodo'
import Counter from '../components/Counter'
import CardsPanel from '../components/CardsPanel'
import PreLoader from '../components/PreLoader'
=======
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a

import AddTodo from '../components/AddTodo'
import Counter from '../components/Counter'
import CardsPanel from '../components/CardsPanel'
import PreLoader from '../components/PreLoader'
<<<<<<< HEAD
=======
import Navbar from '../components/Navbar'
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a

import { fetchAllTodos } from '../actions/todoActions'

@connect((store) => {
	return {
		loading : store.pageReducer.loading,
<<<<<<< HEAD
		userData : store.userReducer,
=======
<<<<<<< HEAD
		userData : store.userReducer,
	}
})
class Index extends Component {

	componentWillMount() {
		const { isLoggedIn, userEmail } = this.props.userData
		if (!isLoggedIn) {
			hashHistory.push('/login')
		} else {
			fetchAllTodos(userEmail)
		}
	}


	render() {
		return (
			(this.props.loading)
				?	<div className="loader-class preloader-wrapper big active">
						<PreLoader color="blue"/>
						<PreLoader color="red"/>
						<PreLoader color="yellow"/>
						<PreLoader color="green"/>
					</div>
				: <div>
						<Counter/>
						<AddTodo/>
					 	<CardsPanel/>
					</div>
=======
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
	}
})
class Index extends Component {

	componentWillMount() {
		const { isLoggedIn, userEmail } = this.props.userData
		if (!isLoggedIn) {
			hashHistory.push('/login')
		} else {
			fetchAllTodos(userEmail)
		}
	}


	render() {
		return (
			(this.props.loading)
				?	<div className="loader-class preloader-wrapper big active">
						<PreLoader color="blue"/>
						<PreLoader color="red"/>
						<PreLoader color="yellow"/>
						<PreLoader color="green"/>
					</div>
				: <div>
						<Counter/>
						<AddTodo/>
					 	<CardsPanel/>
					</div>
<<<<<<< HEAD
=======
				</div>
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
		)
	}
}

<<<<<<< HEAD
export default Index
=======
<<<<<<< HEAD
export default Index
=======
export default Index
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
