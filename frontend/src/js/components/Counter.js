import React, { Component } from 'react'
import { connect } from 'react-redux'

import BadgeIcons from './BadgeIcons'

@connect((store) => {
	return {
		totalTodos : store.todoReducer.totalTodos,
		inCompletedTodos : store.todoReducer.inCompletedTodos,
	}
})
class Counter extends Component {
	
	render() {
		const { totalTodos, inCompletedTodos } = this.props
		return (
			<div class="row">
				<div class="col s4 offset-s4">
					<div class="collection">
						<BadgeIcons content="Total number of Cards" value={totalTodos}/>
						<BadgeIcons content="Completed Cards" value={totalTodos-inCompletedTodos}/>
						<BadgeIcons content="To-Do Cards" value={inCompletedTodos}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Counter
