import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoCard from './TodoCard'
import TodoSection from './TodoSection'




@connect((store) => {
	return {
		todos : store.todoReducer.todos,
	}
})
class CardsPanel extends Component {

	render() {
		const { todos } = this.props

		const completeTodoCards = todos
							.filter(todo => todo.complete === true)
							.map(todo => <TodoCard key={todo.id} todo={todo} status="complete"/>)
		const inCompleteTodoCards = todos
							.filter(todo => todo.complete === false)
							.map(todo => <TodoCard key={todo.id} todo={todo} status="incomplete"/>)
		
		return (
			<div class="row">
				<div class="col s6">
					<TodoSection title="Your To-Do's" todos={inCompleteTodoCards}/>
				</div>
				<div class="col s6">
					<TodoSection title="Completed tasks" todos={completeTodoCards}/>
				</div>
			</div>
		)
	}
}

export default CardsPanel