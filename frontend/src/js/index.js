import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import store from './store'

import Frame from './pages/FramePage'
import Index from './pages/IndexPage'
import Login from './pages/LoginPage'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Frame}>
				<IndexRoute component={Index}></IndexRoute>
				<Route path="login" component={Login}></Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
)
