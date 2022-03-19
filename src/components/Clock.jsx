import { icons } from '../public/icons'
import styles from '../styles/styles.module.css'
import Button from './Button'
import { useTimeContext } from '../hooks/useTimeContext'

const Clock = () => {
	const { location, time } = useTimeContext() // eslint-disable-line

	return (
		<section className={`${styles.clock}`}>
			<div className={styles.clockContent}>
				<div className={`${styles.grettingContent}`}>
					<figure>
						<img src={icons.sun} alt='' />
					</figure>
					<p className={`${styles.gretting}`}>Good Morning</p>
				</div>

				<div className={`${styles.timeNow}`}>
					<p className={`${styles.time}`}>
						{/* 11:37 */}
						{/* 
						<span className={`${styles.timeBST}`}>bst</span> */}
					</p>
				</div>
				<div className={styles.zone}>
					{/* {!isLoading && (
						<p className={styles.zoneText}>
							in {location.country_name}, {location.country_code}
						</p>
					)} */}
				</div>
			</div>
			<div className={styles.expand}>
				<Button />
			</div>
		</section>
	)
}

export default Clock
