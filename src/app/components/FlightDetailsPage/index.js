import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.scss'

export const FlightDetailsPage = (props) => {
	
	const getFlight = () => {
		const id = parseInt(props.match.params.id, 10)
		const storedFlights = JSON.parse(sessionStorage.getItem('flights'))

		const flight = storedFlights.filter(flight => id === flight.id)
		
		return flight[0]
	}

	const selectLogo = (manufacturer) => {
		return manufacturer.startsWith('Boeing') ? '//logo.clearbit.com/b737.org.uk' : '//logo.clearbit.com/airbus.com'		
	}

	const displayFlight = () => {
		const flight = getFlight()

		return (
			<section className="details-holder">
				<img src={selectLogo(flight.manufacturerAndModel)} alt="logo"/>	
				<div>				
					<p>Manufacturer: {flight.manufacturerAndModel}</p>
					<p>Departed: {flight.from}</p>
					<p>Destination: {flight.to}</p>
				</div>
			</section>
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
