import React, { Component } from 'react'

class TodoSection extends Component {
	
	render() {
		const { todos, title } = this.props

		return (
			<div class="card grey lighten-5">
				<div class="card-content">
					<span class="card-title">{title}</span>
					<hr/> <br/>
					{todos}
				</div>
			</div>
		)
	}
}

export default TodoSection