import { icons } from '../public/icons'
import styles from '../styles/styles.module.css'
import Button from './Button'

const Clock = () => {
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
						11:37
						<span className={`${styles.timeBST}`}>bst</span>
					</p>
				</div>
				<div className={styles.zone}>
					<p className={styles.zoneText}> in london, uk</p>
				</div>
			</div>
			<div className={styles.expand}>
				<Button />
			</div>
		</section>
	)
}

export default Clock
