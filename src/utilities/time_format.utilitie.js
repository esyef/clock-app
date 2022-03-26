export const timeFormatUtilitie = datetime => {
	const search = /\D/
	const newArray = datetime.split(search)

	// items object
	const hour = newArray[3]
	const minutes = newArray[4]

	const timeObject = {
		hour,
		minutes,
	}

	return { timeObject }
}
