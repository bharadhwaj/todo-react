import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import store from './store'

<<<<<<< HEAD
import Frame from './pages/FramePage'
import Index from './pages/IndexPage'
import Login from './pages/LoginPage'
=======
import Index from './pages/IndexPage'
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
<<<<<<< HEAD
			<Route path="/" component={Frame}>
				<IndexRoute component={Index}></IndexRoute>
				<Route path="login" component={Login}></Route>
=======
			<Route path="/" component={Index}>
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
<<<<<<< HEAD
)
=======
)
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
