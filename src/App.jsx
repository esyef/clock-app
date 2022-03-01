import Clock from './components/Clock'
import Quote from './components/Quote'
import styles from './styles/styles.module.css'

const App = () => {
	return (
		<div className={styles.appContainer}>
			<div className={styles.layaout}>
				<Quote />
				<Clock />
			</div>
		</div>
	)
}

export default App
