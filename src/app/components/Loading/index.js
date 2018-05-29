import React from 'react'

import './style.scss'

export const Loading = () => {
	return (
		<div className="alert alert-info loading-component">
			<strong>Loading!</strong> Please wait.
		</div>
	)
}