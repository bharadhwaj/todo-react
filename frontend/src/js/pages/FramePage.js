import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTodo from '../components/AddTodo'
import CardsPanel from '../components/CardsPanel'
import GoogleLoginForm from '../components/GoogleLoginForm'
import PreLoader from '../components/PreLoader'
import Navbar from '../components/Navbar'

import { checkLogin } from '../actions/userActions'

@connect((store) => {
	return {
		loading : store.pageReducer.loading,
	}
})
class Frame extends Component {
	
	componentWillMount() {
		checkLogin()
	}

	render() {
		return (
			<div>
				<Navbar/>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Frame
