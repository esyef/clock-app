import { useTimeContext } from '../../../hooks/useTimeContext'
import { icons } from '../../../public/icons'
import styles from './Greting.module.css'

const Greting = () => {
	const { time } = useTimeContext()
	return (
		<div className={styles.wrapper}>
			<span className={styles.icons}>
				{time.isDayTime ? <img src={icons.sun} /> : <img src={icons.moon} />}
			</span>
			{time.isMorning ? (
				<p className={styles.greting}>
					{time.isMorning ? 'Good Morning' : 'Good Afternoon' || 'Good Evening'}

					<span className={styles.currently}>, it`s currently</span>
				</p>
			) : (
				<p className={styles.greting}>
					Good Evening
					<span className={styles.currently}>, it`s currently</span>
				</p>
			)}
		</div>
	)
}

export default Greting
