import { useTimeContext } from '../../../hooks/useTimeContext'
import styles from './Location.module.css'
const Location = () => {
	const { location } = useTimeContext()
	return (
		<p className={styles.location}>
			in {location.city}, {location.country_code}
		</p>
	)
}

export default Location
