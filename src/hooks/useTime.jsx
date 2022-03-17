import { useState, useEffect } from 'react'
import { getLocation } from '../services/getLocation'
import { getTime } from '../services/getTime'
import { timeZoneUtilitie } from '../utilities/time_zone.utilitie'

const useTime = () => {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getLocation().then(data => {
			setData(data)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		if (Object.keys(data).length > 0) {
			const arrTimeZone = data.time_zone
			const datatimeZone = timeZoneUtilitie(arrTimeZone)
			// get time
			getTime(datatimeZone.zone, datatimeZone.city).then(time => {
				const search = /\D/ // find  only characters
				const newTime = time.datetime.split(search)
				const hour = newTime[3]
				const minutes = newTime[4]
				const isAM = hour > 0 && hour < 12 && true
				const isPM = hour >= 12 && hour <= 23 && true
				const newObject = {
					hour,
					minutes,
					isAM,
					isPM,
				}

				setData({
					...data,
					time: newObject,
				})
			})
		}
	}, [loading])

	return { data, loading }
}

export default useTime
