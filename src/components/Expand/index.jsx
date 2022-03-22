import useShowExpand from '../../hooks/useShowExpand'
import { useTimeContext } from '../../hooks/useTimeContext'
import styles from './Expand.module.css'

const Expand = () => {
	const { time, location } = useTimeContext()
	const { expand } = useShowExpand()

	return (
		<section
			className={`${time.isDayTime ? styles.bgLigth : styles.bgDark} ${
				expand ? styles.show : styles.hidden
			}`}
		>
			<div className={styles.wrapper}>
				<span
					className={`${styles.separator} ${
						time.isDayTime ? styles.separatorDark : styles.separatorLigth
					}`}
				></span>
				<div className={styles.grid}>
					<div className={styles.subGrid}>
						<p className={styles.description}>current timezone</p>
						<p className={styles.descriptionValue}>{location.timezone}</p>
					</div>

					<div className={styles.subGrid}>
						<p className={styles.description}>day of the year</p>
						<p className={styles.descriptionValue}>{time.dayOfyear}</p>
					</div>

					<div className={styles.subGrid}>
						<p className={styles.description}>day of the week</p>
						<p className={styles.descriptionValue}>{time.dayOfWeek}</p>
					</div>

					<div className={styles.subGrid}>
						<p className={styles.description}>week number</p>
						<p className={styles.descriptionValue}>{time.weekNumber}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Expand
