import { useTimeContext } from '../../../hooks/useTimeContext'

const Time = () => {
	const { time } = useTimeContext()

	return (
		<p className='text-base font-bold tracking-tighter leading-base md:text-medium md:leading-medium lg:text-large lg:leading-large'>
			{`${time.hour}:${time.minutes}`}
		</p>
	)
}

export default Time
