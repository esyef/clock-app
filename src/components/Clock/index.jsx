import styles from './clock.module.css'
import Greting from './Greting'
import Location from './Location'
import Time from './Time'

const Clock = () => {
	return (
		<div className={styles.wrapper}>
			<Greting />
			<Time />
			<Location />
		</div>
	)
}

export default Clock
