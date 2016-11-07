import React, { Component } from 'react'
import store from '../store'

class TodoCard extends Component {

	toggleCards() {
		const { status, todo } = this.props
		if (status === 'complete') {
			Materialize.toast('Card successfully moved to To-Do!', 2000)
		} else if (status === 'incomplete') {
			Materialize.toast('Card successfully moved to Completed!', 2000)
		}
		store.dispatch({
			type : 'TOGGLE_TODO',
			payload : todo.id,
		})
	}

	render() {
		const { todo, status } = this.props
		const checkedStatus = status === 'complete' ? 'checked' : ''
		return (
			<div className="card-panel hoverable">
					<input checked={checkedStatus} className={status === 'complete' ? 'strikethrough' : null } onClick={this.toggleCards.bind(this)} type="checkbox" id={todo.id} />
					<label for={todo.id}>
						<h7> {todo.text} </h7>
					</label>
				<a href="" className="secondary-content">
					<i className="material-icons">close</i>
				</a>
			</div>
		)
	}
}

export default TodoCard
