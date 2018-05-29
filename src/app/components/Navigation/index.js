import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './style.scss'

const Navigation = () => {

	return (
		<div className="container-fluid bg-dark">
			<div className="container">
				<div className="nav-holder">
					<div className="header">	
						<h2><Link to="/">AirTraffic</Link></h2>
					</div>	
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>	
							<li>
								<Link to="/flights">Flights</Link>
							</li>		
						</ul> 
					</nav>
				</div>
			</div>
		</div>	
	)
}

export default withRouter(Navigation)