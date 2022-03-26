import useShowExpand from '../../hooks/useShowExpand'
import { icons } from '../../public/icons'

const Button = () => {
	const { expand, toggleExpand } = useShowExpand()

	return (
		<div>
			<a
				onClick={toggleExpand}
				role='button'
				className='inline-flex gap-1 bg-white text-black uppercase tracking-widest rounded-full px-2 py-2	items-center justify-between'
			>
				{!expand ? (
					<>
						{' '}
						more{' '}
						<img
							src={icons.down}
							className='bg-slate-900 p-2 rounded-full'
						/>{' '}
					</>
				) : (
					<>
						less
						<img src={icons.up} className='bg-slate-900 p-2 rounded-full' />
					</>
				)}
			</a>
		</div>
	)
}

export default Button
