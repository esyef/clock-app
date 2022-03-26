import { ExpandState } from '../context/Expand/ExpandState'

import { useTimeContext } from '../hooks/useTimeContext'
import Clock from './Clock'
import Expand from './Expand'
import Footer from './Footer'
import Quote from './Quote'

const Container = () => {
	const { time } = useTimeContext()

	return (
		<ExpandState>
			<div
				className={`bg-no-repeat bg-cover bg-left-top min-h-screen 
					${
						time.isDayTime
							? 'MobileDay TabletDay DesktopDay'
							: 'MobileNight TabletNight DesktopNight'
					}`}
			>
				<div className='grid place-items-center py-16 lg'>
					<div className='mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex flex-col gap-52'>
						<Quote />

						<Clock />
					</div>
				</div>
				<Expand />
				<Footer />
			</div>
		</ExpandState>
	)
}

export default Container
