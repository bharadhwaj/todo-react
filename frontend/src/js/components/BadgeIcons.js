import React, { Component } from 'react'

class BadgeIcons extends Component {
	render() {
		return (
			<a class="collection-item">
				<strong> {this.props.content} </strong>
				<span class="new badge right" data-badge-caption="cards"> {this.props.value} </span>
			</a>
		)
	}
}

export default BadgeIcons
