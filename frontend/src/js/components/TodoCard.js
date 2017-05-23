import React, { Component } from 'react'

import { toggleTodo, deleteTodo } from '../actions/todoActions'

class TodoCard extends Component {

	toggleCards() {
		const { status, todo } = this.props
		toggleTodo(todo, status)
	}

	deleteCards() {
		const { todo } = this.props
		deleteTodo(todo)
	}

	render() {
		const { todo, status } = this.props
		const checkedStatus = status === 'complete' ? 'defaultChecked' : null
		return (
			<div className="card-panel hoverable">
				<input type="checkbox" id={todo.id} defaultChecked={checkedStatus} className={status === 'complete' ? 'strikethrough' : null } onClick={this.toggleCards.bind(this)}/>
				<label for={todo.id}>
					<h7> {todo.text} </h7>
				</label>
				<span onClick={this.deleteCards.bind(this)} href="" className="close-button secondary-content">
					<i className="material-icons">close</i>
				</span>
			</div>
		)
	}
}

export default TodoCard
