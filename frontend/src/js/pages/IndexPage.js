import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTodo from '../components/AddTodo'
import CardsPanel from '../components/CardsPanel'
import Counter from '../components/Counter'
import PreLoader from '../components/PreLoader'
import Navbar from '../components/Navbar'

import { fetchAllTodos } from '../actions/todoActions'

@connect((store) => {
	return {
		loading : store.pageReducer.loading,
	}
})
class Index extends Component {
	
	componentWillMount() {
		fetchAllTodos()
	}

	render() {
		return (
			(this.props.loading) 
				? <div className="loader-class preloader-wrapper big active">
					<PreLoader color="blue"/>
					<PreLoader color="red"/>
					<PreLoader color="yellow"/>
					<PreLoader color="green"/>
				</div>
				: <div>
					<Navbar/>
					<div className="container">
						<Counter/>
						<AddTodo/>
						<CardsPanel/>
					</div>
				</div>
		)
	}
}

export default Index