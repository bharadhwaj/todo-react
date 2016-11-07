import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import AddTodo from '../components/AddTodo'
import CardsPanel from '../components/CardsPanel'


class Index extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<div className="container">
					<Counter/>
					<AddTodo/>
					<CardsPanel/>
				</div>
			</div>
		)
		
	}
}

export default Index