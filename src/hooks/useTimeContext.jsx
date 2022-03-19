import { useEffect, useContext } from 'react'
import { TimeContext } from '../context/Time/TimeContext'
import { timeZoneUtilitie } from '../utilities/zone_time_format.utilitie'

export const useTimeContext = () => {
	const { location, isLoading, time, getLocation, getTimeWithLocation } =
		useContext(TimeContext)

	useEffect(() => {
		getLocation()
	}, [])

	useEffect(() => {
		if (Object.keys(location).length > 0) {
			const { zone, city } = timeZoneUtilitie(location.timezone)
			getTimeWithLocation(zone, city)
		}
	}, [isLoading])

	return { location, time }
}
