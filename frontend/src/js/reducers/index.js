import { combineReducers } from 'redux'

import pageReducer from './pageReducer'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

export default combineReducers({
	pageReducer,
	userReducer,
	todoReducer,
})
