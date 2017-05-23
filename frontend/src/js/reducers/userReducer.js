export default function reducer(state = {
	isLoggedIn : false,
	userName : null,
	userEmail : null,
}, action) {

	switch(action.type) {

		case "LOGIN": {
			return {
				...state,
				isLoggedIn : true,
				userName : action.payload.userName,
				userEmail : action.payload.userEmail,
			}
		}

		case "LOGOUT": {
			return {
				...state,
				isLoggedIn : false,
				userName : null,
				userEmail : null,
			}
		}

		default: {
			return {...state}
		}
	}

	return state;
}
