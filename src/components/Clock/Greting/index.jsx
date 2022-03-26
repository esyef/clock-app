import { useTimeContext } from '../../../hooks/useTimeContext'
import { icons } from '../../../public/icons'

const Greting = () => {
	const { time } = useTimeContext()
	let gretting = ''

	if (time.isMorning) {
		gretting = 'Good morning'
	} else if (time.isAfternoon) {
		gretting = 'Good afternoon'
	} else if (time.isAEvening) {
		gretting = 'Good evening'
	}

	return (
		<section role='contentinfo' className='flex gap-x-2 items-center'>
			<span className='inline-block'>
				{time.isDayTime ? (
					<img src={icons.sun} role='figure' />
				) : (
					<img src={icons.moon} role='figure' />
				)}
			</span>

			<p className='uppercase font-normal text-sm md:text-lg lg:text-xl'>
				{gretting}
				<span className='hidden md:inline-block'>, it`s currently</span>
			</p>
		</section>
	)
}

export default Greting
