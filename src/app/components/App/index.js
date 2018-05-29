import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './../../containers/HomePage'
import { FlightsPage } from './../../containers/FlightsPage'
import { FlightDetailsPage } from './../FlightDetailsPage'
import Navigation from './../Navigation'
import { Footer } from './../Footer'

import './style.scss'

export const App = () => {
	return (
		<Fragment>
			<Navigation />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/flights" component={FlightsPage} />
				<Route exact path="/flight/:id" component={FlightDetailsPage} />
			</Switch>
			<Footer />
		</Fragment>
	)
}