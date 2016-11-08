export default function reducer(state = { 
	todos : [
		{
			id : 1478591056561,
			text : 'Go home, Get drunk!',
			complete : false,
		},
		{
			id : 1478590075912,
			text : 'Tip the bartender.',
			complete : false,
		},
	],
	totalTodos : 2,
	inCompletedTodos : 2,
}, action) {
	switch(action.type) {

		case "ADD_TODO": {
			return {
				...state,
				todos : [action.payload, ...state.todos],
				totalTodos : state.todos.length + 1,
				inCompletedTodos : state.todos.filter(todo => todo.complete === false).length + 1
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