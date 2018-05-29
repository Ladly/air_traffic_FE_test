export class Flight {
	constructor(Id, Alt, Mdl, From, To, Trak, Icao ){
		this.id = Id
		this.altitude = Math.round(Alt * 0.304)
		this.manufacturerAndModel = Mdl
		this.from = From
		this.to = To
		this.direction = (Trak < 45 || Trak > 135) ? 'E' : 'W'
		this.codeNumber = Icao
	}
}