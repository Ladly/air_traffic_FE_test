import React, { Component } from 'react'

import { AirTrafficService } from './../../../services/AirTrafficService'

import { PlaneSvg } from './../../components/Svg'

import './style.scss'

class App extends Component {

	componentDidMount() {
		AirTrafficService.getAllTrafic()
	}

	render (){
		return (
			<PlaneSvg />
			// <h1>Yay</h1>
		)
	}
}

export { App }