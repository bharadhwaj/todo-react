export default function reducer(state = { 
	todos : [ ],
	totalTodos : 0,
	inCompletedTodos : 0,
}, action) {
	
	switch(action.type) {

		case "ADD_TODO": {
			return {
				...state,
				todos : [...action.payload, ...state.todos],
				totalTodos : state.todos.length + action.payload.length,
				inCompletedTodos : state.todos.filter(todo => todo.complete === false).length + action.payload.length
			}
		}

		case "REMOVE_TODO": {
			return {
				...state,
				todos: [...state.todos.filter(todo => todo.id !== action.payload.id)],
				totalTodos : state.todos.length - 1,
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos : state.inCompletedTodos - 1 
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
				inCompletedTodos : action.payload.complete ? state.inCompletedTodos + 1 : state.inCompletedTodos - 1 
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

		default: {
			return {...state}
		}
	}

	return state;
}