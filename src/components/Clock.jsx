import useTime from '../hooks/useTime'
import { icons } from '../public/icons' // eslint-disable-line
import styles from '../styles/styles.module.css'
import Button from './Button'

const Clock = () => {
	const { data, loading } = useTime() // eslint-disable-line

	console.log(data)
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
