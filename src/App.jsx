import { Clock, Button, Quote, Expand } from './components'
import { ExpandState } from './context/Expand/ExpandState'
import TimeState from './context/Time/TimeState'

import Layaout from './Layaout/Layaout'
import styles from './Layaout/layaout.module.css'

const App = () => {
	return (
		<TimeState>
			<Layaout>
				<ExpandState>
					<section className={styles.wrapper}>
						<div className={styles.grid}>
							<Clock />
							<Button />
							<Quote />
						</div>
					</section>

					<Expand />
				</ExpandState>
			</Layaout>
		</TimeState>
	)
}

export default App
