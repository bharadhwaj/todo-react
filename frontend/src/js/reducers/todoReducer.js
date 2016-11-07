export default function reducer(state = { 
	todos : [
		{
			id : 1,
			text : 'Go home, Get drunk!',
			complete : false,
		},
		{
			id : 2,
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
				todos : [...state.todos, action.payload],
				totalTodos : ++state.totalTodos,
				inCompletedTodos : ++state.inCompletedTodos,
			}
		}

		case "REMOVE_TODO": {
			return {
				...state,
				todos: [...state.todos.filter(todo => todo.id !== action.payload)],
				totalTodos : --state.totalTodos,
				inCompletedTodos : [...state.todos.filter(todo => todo.id === action.payload)][0].complete === false 
					? --state.inCompletedTodos 
					: state.inCompletedTodos,
			}
		}

		case "TOGGLE_TODO": {
			return {
				...state,
				todos: [...state.todos.map(todo => {
					todo.id === action.payload ? todo.complete = !todo.complete : todo.complete
					return todo
				})],
				inCompletedTodos : [...state.todos.filter(todo => todo.id === action.payload)][0].complete === false 
					? --state.inCompletedTodos 
					: state.inCompletedTodos,
			}
		}

		case "SET_COMPLETED": {
			return {
				...state,
				todos: [...state.todos.map(todo => {
					todo.id === action.payload ? todo.complete = true : todo.complete
					return todo
				})],
				inCompletedTodos : --state.inCompletedTodos,
			}
		}

		case "SET_INCOMPLETED": {
			return {
				...state,
				todos: [...state.todos.map(todo => {
					todo.id === action.payload ? todo.complete = false : todo.complete
					return todo
				})],
				inCompletedTodos : ++state.inCompletedTodos,
			}
		}

		default: {
			return {...state}
		}
	}

	return state;
}