import { useTimeContext } from '../hooks/useTimeContext'
import styles from './layaout.module.css'

const Layaout = ({ children }) => {
	const { time } = useTimeContext()

	return (
		<div
			className={`
                ${styles.appContainer} 
                ${time.isDayTime ? styles.bgMornig : styles.bgEvening} 
               `}
		>
			{children}
		</div>
	)
}

export default Layaout
