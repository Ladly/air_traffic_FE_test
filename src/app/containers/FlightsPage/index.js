import React, { Component } from 'react'

import { AirTrafficService } from './../../../services/AirTrafficService'
import { FlightListItem } from '../../components/FlightListItem'

import './style.scss'


export class FlightsPage extends Component {
	state = {
		flights: []
	}

	componentDidMount() {
		this.getFreshData()
		this.interval = setInterval(() => {
			this.getFreshData()}, 60000)
	}

	getFreshData = () => {
		const position = JSON.parse(sessionStorage.getItem('coordinates'))
		const { longitude, latitude } = position

		AirTrafficService.getTrafficFromPosition(latitude, longitude)
			.then(flights => {
				this.setState({flights}, ()=> {
					const flightsJson = JSON.stringify(this.state.flights)
					sessionStorage.setItem('flights', flightsJson)
				})
			})
	}

	displayFlights = () => {
		if(this.state.flights.length) {
			return this.state.flights.map(flight => {
				const { id, altitude, codeNumber, direction } = flight
				return (
					<FlightListItem 
						key={id} 
						id={id}
						altitude={altitude} 
						codeNumber={codeNumber} 
						direction={direction}
					/>
				)
			})
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return (
			<div className="container">
				<ul className="flight-holder row">
					{this.displayFlights()}
				</ul>
		 	</div>
		 )
	}
}