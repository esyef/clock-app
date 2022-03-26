import useShowExpand from '../../hooks/useShowExpand'
import { useTimeContext } from '../../hooks/useTimeContext'

const Expand = () => {
	const { time, location } = useTimeContext()
	const { expand } = useShowExpand()

	return (
		<section
			className={`${!expand ? 'hidden' : 'flex  backdrop-blur-md'} ${
				time.isDaytime ? 'bg-white/75' : 'bg-black/75'
			}`}
		>
			<div className='mx-auto w-11/12 md:w-10/12 lg:w-9/12 uppercase md:grid md:gap-x-20 md:gap-y-12 md:grid-cols-2 relative py-24 flex flex-col gap-5'>
				<span
					role='figure'
					className={`hidden lg:inline-block lg:h-44 lg:w-0.5 absolute lg:left-1/2 lg:top-24 opacity-10 mix-blend-normal
					${time.isDaytime ? 'bg-slate-800' : 'bg-white'}`}
				></span>

				<div className='flex justify-between items-center md:items-start md:flex-col md:gap-1'>
					<p className='text-xs tracking-widest lg:text-sm font-normal'>
						current timezone
					</p>
					<p className='font-bold lg:text-4xl md:text-2xl te'>
						{location.timezone}
					</p>
				</div>
				<div className='flex justify-between items-center  md:items-start md:flex-col md:gap-1'>
					<p className='text-xs tracking-widest lg:text-sm font-normal'>
						day of the week
					</p>
					<p className='font-bold lg:text-4xl md:text-2xl '>{time.dayOfWeek}</p>
				</div>
				<div className='flex justify-between md:items-start items-center md:flex-col md:gap-1'>
					<p className='text-xs tracking-widest lg:text-sm font-normal'>
						day of the year
					</p>
					<p className='font-bold lg:text-4xl md:text-2xl'>{time.dayOfWeek}</p>
				</div>
				<div className='flex  md:items-start justify-between items-center md:flex-col md:gap-1'>
					<p className='text-xs tracking-widest lg:text-sm font-normal'>
						week number
					</p>
					<p className='font-bold md:text-2xl lg:text-4xl '>
						{time.weekNumber}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Expand
