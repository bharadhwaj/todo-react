import React, { Component } from 'react'
import { connect } from 'react-redux'

<<<<<<< HEAD
import BadgeIcons from '../components/BadgeIcons'
=======
import BadgeIcons from './BadgeIcons'
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569

@connect((store) => {
	return {
		totalTodos : store.todoReducer.totalTodos,
		inCompletedTodos : store.todoReducer.inCompletedTodos,
	}
})
class Counter extends Component {
<<<<<<< HEAD

=======
	
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
