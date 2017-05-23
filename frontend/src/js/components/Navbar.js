import React, { Component } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
=======
<<<<<<< HEAD
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { logoutUser } from '../actions/userActions'

@connect((store) => {
	return {
		userData : store.userReducer,
	}
})
class Navbar extends Component {
	render() {
		const { isLoggedIn, userName } = this.props.userData

=======
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a

import { logoutUser } from '../actions/userActions'

@connect((store) => {
	return {
		userData : store.userReducer,
	}
})
class Navbar extends Component {
	render() {
<<<<<<< HEAD
		const { isLoggedIn, userName } = this.props.userData

=======
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
		return (
			<div className="row">
				<nav>
					<div className="nav-wrapper teal">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
						<span className="brand-logo center">
							<Link to="/"> <h4>To Do List</h4> </Link>
						</span>
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							{
								isLoggedIn
									? <li style = {{ cursor : 'pointer' }} onClick= { () => { logoutUser(); hashHistory.push('/login'); } }>
												<Link to="/"> Logout({ userName }) </Link>
											</li>
									: <span>
											<li> <Link to="/login"> Login </Link> </li>
										</span>
							}
			      </ul>
<<<<<<< HEAD
=======
=======
						<a href="/" onClick={ (event) => event.preventDefault() } className="brand-logo center">
							<h4>To-Do List</h4>
						</a>
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
					</div>
				</nav>
			</div>
		)
	}
}

<<<<<<< HEAD
export default Navbar
=======
<<<<<<< HEAD
export default Navbar
=======
export default Navbar
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
