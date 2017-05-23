import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { loginUser } from '../actions/userActions'

const responseOnSuccess = (response) => {
	let { profileObj } = response
	let userData = { isLoggedIn : true,
									 userName : profileObj.name,
									 userEmail : profileObj.email }
	loginUser(userData)
}

const responseOnFailure = (response) => {
	console.log(response)
}

class GoogleLoginForm extends Component {

	render() {
		return (
			<div class="row">
				<div class="col s4 offset-s4">
				<GoogleLogin
					clientId="324489279489-2s3qjpgs7e4povd0o4r2jum1b16dbg5h.apps.googleusercontent.com"
					buttonText="Log in using Google"
					onSuccess={responseOnSuccess}
					onFailure={responseOnFailure}
				/>
				</div>
			</div>
		)
	}
}

export default GoogleLoginForm
