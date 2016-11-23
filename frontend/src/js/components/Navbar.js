import React, { Component } from 'react'

class Navbar extends Component {
	render() {
		return (
			<div className="row">
				<nav>
					<div className="nav-wrapper teal">
						<a href="/" onClick={ (event) => event.preventDefault() } className="brand-logo center">
							<h4>To-Do List</h4>
						</a>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar