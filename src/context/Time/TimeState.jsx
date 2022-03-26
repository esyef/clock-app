import axios from 'axios'
import { useReducer } from 'react'
import { timeFormatUtilitie } from '../../utilities/time_format.utilitie'
import { TimeContext } from './TimeContext'
import { TimeReducer } from './TimeReducer'

const TimeState = ({ children }) => {
	const initialState = {
		location: {},
		time: {},
		isLoading: true,
	}

	const [state, dispatch] = useReducer(TimeReducer, initialState)

	const getLocation = async () => {
		const API_KEY = import.meta.env.VITE_APIKEY
		const URL_SERCVICE = `https://api.freegeoip.app/json/?apikey=${API_KEY}`
		const res = await axios.get(`${URL_SERCVICE}`)
		const data = await res.data

		const newObject = {
			city: data.city,
			country_code: data.country_code,
			country_name: data.country_name,
			timezone: data.time_zone,
		}

		dispatch({
			type: 'GETLOCATION',
			payload: newObject,
		})
	}

	const getTimeWithLocation = async (zone, city) => {
		const res = await axios.get(
			`https://worldtimeapi.org/api/timezone/${zone}/${city}`
		)
		const data = await res.data

		const { timeObject } = timeFormatUtilitie(data.datetime)
		const { hour, minutes } = timeObject

		const hourMinutes = `${hour}:${minutes}`
		const isDayTime = hourMinutes >= '05:00' && hourMinutes <= '17:59'
		const isNightTime = hourMinutes >= '18:00' && hourMinutes <= '04:59'
		const isMorning = hourMinutes >= '05:00' && hourMinutes <= '11:59'
		const isAfternoon = hourMinutes >= '12:00' && hourMinutes <= '17:59'
		const isAEvening = hourMinutes >= '18:00'

		const newObject = {
			datetime: data.datetime,
			dayOfWeek: data.day_of_week,
			dayOfyear: data.day_of_year,
			weekNumber: data.week_number,
			hour,
			minutes,
			isDayTime,
			isNightTime,
			isMorning,
			isAfternoon,
			isAEvening,
		}
		dispatch({
			type: 'GETTIME',
			payload: newObject,
		})
	}

	return (
		<TimeContext.Provider
			value={{
				location: state.location,
				time: state.time,
				isLoading: state.isLoading,
				getLocation,
				getTimeWithLocation,
			}}
		>
			{children}
		</TimeContext.Provider>
	)
}

export default TimeState
