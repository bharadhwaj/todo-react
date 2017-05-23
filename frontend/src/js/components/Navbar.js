import React, { Component } from 'react'
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

		return (
			<div className="row">
				<nav>
					<div className="nav-wrapper teal">
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
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar
