import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import AddTodo from '../components/AddTodo'
import Counter from '../components/Counter'
import CardsPanel from '../components/CardsPanel'
import PreLoader from '../components/PreLoader'

import { fetchAllTodos } from '../actions/todoActions'

@connect((store) => {
	return {
		loading : store.pageReducer.loading,
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
		)
	}
}

export default Index
