import { combineReducers } from 'redux'

import pageReducer from './pageReducer'
import todoReducer from './todoReducer'

export default combineReducers({ 
	pageReducer,
	todoReducer,
})