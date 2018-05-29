import React, { Component } from 'react'

import { AirTrafficService } from './../../../services/AirTrafficService'
import { FlightListItem } from '../../components/FlightListItem'
import { Loading } from '../../components/Loading'

import './style.scss'


export class FlightsPage extends Component {
	state = {
		flights: [],
		loading: true
	}

	componentDidMount() {
		 this.testForLocalStorageFlights()
		
		this.interval = setInterval(() => {
			this.getFreshData()}, 60000)
	}

	testForLocalStorageFlights = () => {
		if(sessionStorage.getItem('flights') === null) {
			this.getFreshData()
		} else {
			this.displayLocalStorageFlights()
		}
	}

	displayLocalStorageFlights = () => {
		const flights = JSON.parse(sessionStorage.getItem('flights'))
		this.setState({flights, loading: false})
	}

	getFreshData = () => {
		const position = JSON.parse(sessionStorage.getItem('coordinates'))
		const { longitude, latitude } = position

		AirTrafficService.getTrafficFromPosition(latitude, longitude)
			.then(flights => {
				this.setState({flights, loading: false}, ()=> {
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

	isLoaded = () => {
		if(this.state.loading) {
			return <Loading />
		}
	}

	render() {
		return (
			<div className="container">
				{this.isLoaded()}
				<ul className="flight-holder row">
					{this.displayFlights()}
				</ul>
		 	</div>
		 )
	}
}