import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AuthorizationMessage } from '../../components/AuthorizationMessage'



import './style.scss'

class HomePage extends Component {	
	state = {
		authorized: false
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
			this.setState({authorized : true})
		}, () => {
			this.setState({authorized: false})
		})
	}

	displayAuthorisationMessage = () => {
		return this.state.authorized ? 
			(
				<div className="alert alert-info text-center">
					<h6 className="landing-page-main">You grant me geolocation so now you can</h6>
					<Link to='/flights' className="btn btn-primary landing-page-main" >Proceed</Link>
				</div>
			) : 
			(
				<AuthorizationMessage />
			)
	}

	render (){
		return (
			<div className="container">
				<header className="jumbotron text-center">
					<h1>Welcome To Air Traffic</h1>
				</header>
				{this.displayAuthorisationMessage()}
			</div>
		)
	}
}

export { HomePage }

