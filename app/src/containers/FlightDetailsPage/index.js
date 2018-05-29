import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export const FlightDetailsPage = (props) => {
	
	const getFlight = () => {
		const id = parseInt(props.match.params.id, 10)
		const storedFlights = JSON.parse(sessionStorage.getItem('flights'))
		const flight = storedFlights.filter(flight => id === flight.id)
		return flight[0]
	}

	const displayFlight = () => {
		const flight = getFlight()
		console.log(flight)
		return (
			<div className="details-holder">
				<img src="http://via.placeholder.com/200x200" alt="logo"/>	
				<div>				
					<p>Manufacturer: {flight.manufacturerAndModel}</p>
					<p>Departed: {flight.from}</p>
					<p>Destination: {flight.to}</p>
				</div>
			</div>
		)
	}



	return (
		<div className="container">
			{displayFlight()}
		</div>
	)
}


FlightDetailsPage.propTypes = {
	match: PropTypes.object
}
