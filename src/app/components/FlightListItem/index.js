import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PlaneSvg } from './../Svg'

export const FlightListItem = ({ altitude, codeNumber, id, direction }) => {

	return (
		<li className="col-sm-4 offset-sm-4">
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