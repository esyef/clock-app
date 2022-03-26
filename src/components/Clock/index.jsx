import Button from '../Button'

import Greting from './Greting'
import Location from './Location'
import Time from './Time'

const Clock = () => {
	return (
		<div className='flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-10'>
			<div className='flex flex-col gap-2'>
				<Greting />
				<Time />
				<Location />
			</div>
			<div className='lg:self-end  lg:justify-self-end'>
				<Button />
			</div>
		</div>
	)
}

export default Clock
