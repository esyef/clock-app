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
		// const API_KEY = import.meta.env.VITE_APIKEY
		const URL_SERCVICE = `https://api.freegeoip.app/json/?apikey=7e2aeaf0-98d2-11ec-b836-2baa8b457adf`
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
		const {
			hour,
			minutes,
			isMorning,
			isAfternoon,
			isEvening,
			isDayTime,
			isNighttime,
		} = timeObject

		const newObject = {
			datetime: data.datetime,
			dayOfWeek: data.day_of_week,
			dayOfyear: data.day_of_year,
			weekNumber: data.week_number,
			hour,
			minutes,
			isMorning,
			isAfternoon,
			isEvening,
			isDayTime,
			isNighttime,
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
