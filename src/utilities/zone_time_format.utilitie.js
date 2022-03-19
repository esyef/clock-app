export const timeZoneUtilitie = timeZone => {
	const array = timeZone.split('/')
	const zone = array[0]
	const city = array[1]

	return { zone, city }
}
