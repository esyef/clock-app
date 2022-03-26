import { useTimeContext } from '../../../hooks/useTimeContext'

const Location = () => {
	const { location } = useTimeContext()
	return (
		<p className='uppercase font-normal text-sm md:text-lg lg:text-xl'>
			in {location.city}, {location.country_code}
		</p>
	)
}

export default Location
