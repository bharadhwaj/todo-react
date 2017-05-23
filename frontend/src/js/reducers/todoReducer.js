<<<<<<< HEAD
export default function reducer(state = {
=======
<<<<<<< HEAD
export default function reducer(state = {
=======
export default function reducer(state = { 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
	todos : [ ],
	totalTodos : 0,
	inCompletedTodos : 0,
}, action) {
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
	
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
	switch(action.type) {

		case "ADD_TODO": {
			return {
				...state,
				todos : [...action.payload, ...state.todos],
				totalTodos : state.todos.length + action.payload.length,
				inCompletedTodos : state.todos.filter(todo => todo.complete === false).length + action.payload.filter(todo => todo.complete === false).length
			}
		}

		case "REMOVE_TODO": {
			return {
				...state,
				todos: [...state.todos.filter(todo => todo.id !== action.payload.id)],
				totalTodos : state.todos.length - 1,
<<<<<<< HEAD
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos : state.inCompletedTodos - 1
=======
<<<<<<< HEAD
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos : state.inCompletedTodos - 1
=======
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos : state.inCompletedTodos - 1 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
			}
		}

		case "TOGGLE_TODO": {
			return {
				...state,
				todos: [...state.todos.map(todos => {
					let todo = Object.assign({ }, todos)
					todo.id === action.payload.id ? todo.complete = !todo.complete : todo.complete
					return todo
				})],
<<<<<<< HEAD
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos + 1 : state.inCompletedTodos - 1
=======
<<<<<<< HEAD
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos + 1 : state.inCompletedTodos - 1
=======
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos + 1 : state.inCompletedTodos - 1 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
			}
		}

		case "SET_COMPLETED": {
			return {
				...state,
				todos: [...state.todos.map(todos => {
					let todo = Object.assign({ }, todos)
					todo.id === action.payload ? todo.complete = true : todo.complete
					return todo
				})],
				inCompletedTodos : state.todos.filter(todo => todo.complete === false).length - 1
			}
		}

		case "SET_INCOMPLETED": {
			return {
				...state,
				todos: [...state.todos.map(todos => {
					let todo = Object.assign({ }, todos)
					todo.id === action.payload ? todo.complete = false : todo.complete
					return todo
				})],
				inCompletedTodos : state.todos.filter(todo => todo.complete === false).length - 1
			}
		}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
		case "RESET_COUNT": {
			return {
				...state,
				todos : [ ],
				totalTodos : 0,
				inCompletedTodos : 0
			}
		}

<<<<<<< HEAD
=======
=======
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
		default: {
			return {...state}
		}
	}

	return state;
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
