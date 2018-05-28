import { BASE_AIR_TRAFIC_URL } from './../utils/constants' 

export class AirTrafficService {
	static getAllTrafic = () => {
		return new Promise((resolve, reject) => {
			resolve($.getJSON(`${BASE_AIR_TRAFIC_URL}?callback=?`))
		}).then(res => console.log(res))
	}
}