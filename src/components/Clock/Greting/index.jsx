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
					Good Morning
					<span className={styles.currently}>, it`s currently</span>
				</p>
			) : (
				(
					<p className={styles.greting}>
						Good Afternom
						<span className={styles.currently}>, it`s currently</span>
					</p>
				) || (
					<p className={styles.greting}>
						Good evening
						<span className={styles.currently}>, it`s currently</span>
					</p>
				)
			)}
		</div>
	)
}

export default Greting
