export const timeFormatUtilitie = datetime => {
	const search = /\D/
	const newArray = datetime.split(search)

	// items object
	const hour = newArray[3]
	const minute = newArray[4]
	const isAM = hour < 12 && true
	const isPM = hour >= 12 && true

	const timeObject = {
		hour,
		minute,
		isAM,
		isPM,
	}

	return { timeObject }
}
