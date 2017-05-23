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
<<<<<<< HEAD
import Frame from './pages/FramePage'
import Index from './pages/IndexPage'
import Login from './pages/LoginPage'
=======
import Index from './pages/IndexPage'
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
<<<<<<< HEAD
			<Route path="/" component={Frame}>
				<IndexRoute component={Index}></IndexRoute>
				<Route path="login" component={Login}></Route>
=======
<<<<<<< HEAD
			<Route path="/" component={Frame}>
				<IndexRoute component={Index}></IndexRoute>
				<Route path="login" component={Login}></Route>
=======
			<Route path="/" component={Index}>
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
<<<<<<< HEAD
)
=======
<<<<<<< HEAD
)
=======
)
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
>>>>>>> 226bfe5b104dc9b05cffc8d9aa3b7aec09b51c7a
