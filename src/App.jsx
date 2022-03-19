import Clock from './components/Clock'
import Quote from './components/Quote'
import TimeState from './context/Time/TimeState'
import styles from './styles/styles.module.css'

const App = () => {
	return (
		<div className={styles.appContainer}>
			<TimeState>
				<div className={styles.layaout}>
					<Quote />
					<Clock />
				</div>
			</TimeState>
		</div>
	)
}

export default App
