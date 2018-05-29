import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

class HomePage extends Component {
	
	state = {
		authorised: false
	}

	componentDidMount() {
		this.allowGeolocation()
	}

	allowGeolocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const pos = {}
			pos.latitude = position.coords.latitude
			pos.longitude = position.coords.longitude
			const posJson = JSON.stringify(pos) 
			sessionStorage.setItem('coordinates', posJson)
			this.setState({authorised : true})
		}, () => {
			this.setState({authorised: false})
		})
	}

	displayAuthorisationConversation = () => {
		return this.state.authorised ? 
			(
				<div className="alert alert-info text-center">
					<h6 className="landing-page-main">You grant me geolocation so now you can</h6>
					<Link to='/flights' className="btn btn-primary landing-page-main" >Proceed</Link>
				</div>
			) : 
			(
				<div>
					<div className="alert alert-warning text-center">
						<h6 className="landing-page-main">To use this site please allow geolocation</h6>
					</div>
				</div>
			)
	}

	render (){
		return (
			<div className="container">
				<header className="jumbotron text-center">
					<h1>Welcome To Air Traffic</h1>
				</header>
				{this.displayAuthorisationConversation()}
			</div>
		)
	}
}

export { HomePage }

