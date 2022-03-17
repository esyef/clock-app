import axios from 'axios'

export const getLocation = async () => {
	const res = await axios.get(
		'https://api.freegeoip.app/json/?apikey=7e2aeaf0-98d2-11ec-b836-2baa8b457adf'
	)
	const data = await res.data

	return data
}
