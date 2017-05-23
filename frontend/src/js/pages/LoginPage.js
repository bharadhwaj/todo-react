import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import GoogleLoginForm from '../components/GoogleLoginForm'

@connect((store) => {
	return {
		userData : store.userReducer,
	}
})
class Login extends Component {

	componentWillMount() {
		const { isLoggedIn } = this.props.userData
		if (isLoggedIn) {
			hashHistory.push('/')
		}
	}
	
	render() {
		return (
			<div className="card-panel hoverable">
				<span className="card-title"><h5>Login</h5></span>
				<hr/>
				<div className="card-content">
					<h6> Please, log in to continue </h6>
					<center> <GoogleLoginForm/> </center>
				</div>
			</div>
		)
	}
}

export default Login
