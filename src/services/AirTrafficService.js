import { BASE_AIR_TRAFIC_URL } from './../utils/constants'

import { 
	createFlight,
	sortFlights
} from './../utils/helpers'

export class AirTrafficService {

	static getTrafficFromPosition = (latitude, longitude) => {
		return new Promise((resolve, reject) =>{
			resolve (
				$.ajax({
					method: 'GET',
					url: `${BASE_AIR_TRAFIC_URL}?lat=${latitude}&lng=${longitude}&fDstL=0&fDstU=200`,
					dataType: 'jsonp',
			  })
			)
		})
			.then(flights => createFlight(flights))
			.then(flights => sortFlights(flights))
			.catch(console.log('Couldn\'t reach server'))
	}
}

