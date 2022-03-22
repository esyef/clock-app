export const timeFormatUtilitie = datetime => {
	const search = /\D/
	const newArray = datetime.split(search)

	// items object
	const hour = newArray[3]
	const minutes = newArray[4]

	const isMorning = hour >= 5 && hour < 12 && true
	const isAfternoon = hour >= 12 && hour <= 18 && true
	const isEvening = hour >= 18 && hour <= 5 && true

	const isDayTime = hour >= 5 && hour < 18 && true
	const isNighttime = hour >= 18 && hour <= 5 && true

	const timeObject = {
		hour,
		minutes,
		isMorning,
		isAfternoon,
		isEvening,
		isDayTime,
		isNighttime,
	}

	return { timeObject }
}
