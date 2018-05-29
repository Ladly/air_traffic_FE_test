import { BASE_AIR_TRAFIC_URL } from './../utils/constants'

import { createFlight } from './../utils/helpers'

export class AirTrafficService {
	static getAllTrafic = () => {
		return new Promise((resolve, reject) => {
			resolve($.getJSON(`${BASE_AIR_TRAFIC_URL}?callback=?`))
		})
	}

	static getTrafficFromPosition = (latitude, longitude) => {
		return new Promise((resolve, reject) =>{
			resolve ($.ajax({
				method: 'GET',
				url: `${BASE_AIR_TRAFIC_URL}?lat=${latitude}&lng=${longitude}&fDstL=0&fDstU=200`,
				dataType: 'jsonp',
			  })
			)
		})
			.then(res => createFlight(res))
	}
}

