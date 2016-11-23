import React, { Component } from 'react'
import store from '../store'

class TodoCard extends Component {

	toggleCards() {
		const { status, todo } = this.props
		if (status === 'complete') {
			Materialize.toast('Card successfully moved to To-Do!', 2000, 'light-blue')
		} else if (status === 'incomplete') {
			Materialize.toast('Card successfully moved to Completed!', 2000, 'light-blue')
		}
		store.dispatch({ type : 'TOGGLE_TODO', payload : todo })
	}

	deleteCards() {
		const { todo } = this.props
		Materialize.toast('Card removed successfully!', 2000, 'amber accent-2')
		store.dispatch({ type : 'REMOVE_TODO', payload : todo })
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
