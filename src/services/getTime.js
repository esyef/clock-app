import axios from 'axios'

export const getTime = async (zone, city) => {
	const res = await axios.get(
		`http://worldtimeapi.org/api/timezone/${zone}/${city}`
	)
	const data = await res.data
	return data
}
