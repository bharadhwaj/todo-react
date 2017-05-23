import React, { Component } from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'

import { adNewTodo } from '../actions/todoActions'

@connect((store) => {
	return {
		userData : store.userReducer,
	}
})
=======

import { adNewTodo } from '../actions/todoActions'

>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
class AddTodo extends Component {

	componentWillMount() {
		this.setState({ todoText: '' })
	}

	createTodo(event) {
<<<<<<< HEAD
		const { userEmail } = this.props.userData
		event.preventDefault()
		if (this.state.todoText.trim()) {
			let todo = {  id : Date.now(),
										text : this.state.todoText,
										complete : false,
										userEmail : userEmail
									}
=======
		event.preventDefault()
		if (this.state.todoText.trim()) {
			let todo = { id : Date.now(), text : this.state.todoText, complete : false }
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
			adNewTodo(todo)
			this.setState({ todoText: '' })
		} else {
			Materialize.toast('To-Do text can\'t be blank.', 2000, 'red lighten-1')
		}
	}

	handleTextChange(event) {
		this.setState({ todoText: event.target.value })
	}

	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="card grey lighten-5">
						<div className="card-content">
							<span className="card-title">Add a To-Do</span>
							<hr/> <br/>
							<form>
								<div className="input-field">
									<i className="material-icons prefix">list</i>
									<label className="left-align" for="todoText">Enter your To Do</label>
									<input value={this.state.todoText} id="todoText" type="text" className="validate" onChange={this.handleTextChange.bind(this)}/>
								</div>
								<div className="center-align">
									<button className="btn waves-effect btn-large waves-light" type="submit" onClick={this.createTodo.bind(this)}>
										Add <i className="material-icons right">add</i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddTodo
