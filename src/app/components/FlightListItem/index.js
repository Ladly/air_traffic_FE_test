import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PlaneSvg } from './../Svg'

export const FlightListItem = ({ altitude, codeNumber, id, direction }) => {

	return (
		<li className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
			<PlaneSvg direction={direction}/>
			<div >
				<p>Altitude: {altitude}</p>
				<p>Code number: {codeNumber}</p>
				<Link to={`/flight/${id}`} className="btn btn-primary">Details</Link>
			</div>
		</li>
	)
}

FlightListItem.propTypes = {
	altitude: PropTypes.number,
	id: PropTypes.number,
	codeNumber: PropTypes.string,
	direction: PropTypes.string
}