import React from 'react'
import PropTypes from 'prop-types'

import plane from './../../../utils/assets/plane.svg'

import './style.scss'


export const PlaneSvg = ({direction}) => {

	const pickClass = () => {
		return direction === 'E' ? 'east-bound' : 'west-bound'
	}

	return (
		<img className={pickClass()} src={plane} alt="plane svg"/>
	)
}

PlaneSvg.propTypes = {
	direction: PropTypes.string
}