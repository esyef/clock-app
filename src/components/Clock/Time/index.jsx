import { useTimeContext } from '../../../hooks/useTimeContext'
import styles from './Time.module.css'

const Time = () => {
	const { time } = useTimeContext()
	return <p className={styles.time}>{`${time.hour}:${time.minutes}`}</p>
}

export default Time
