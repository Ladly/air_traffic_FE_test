import { Flight } from './../entities/Flight'

export const createFlight = (flights) => {
	return flights.acList.map(flight => {
		const { Id, Alt, Mdl, From, To, Trak, Icao } = flight
		return new Flight(Id, Alt, Mdl, From, To, Trak, Icao)
	})
}