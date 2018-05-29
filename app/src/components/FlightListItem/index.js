import React from 'react'
import PropTypes from 'prop-types'

import { PlaneSvg } from './../Svg'

export const FlightListItem = ({ altitude, codeNumber }) => {
	return (
		<li className="col-sm-4 offset-sm-4">
			<PlaneSvg />
			<div >
				<p>Altitude: {altitude}</p>
				<p>Code number: {codeNumber}</p>
			</div>
		</li>
	)
}

FlightListItem.propTypes = {
	altitude: PropTypes.number,
	codeNumber: PropTypes.string
}