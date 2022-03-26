import TimeState from './context/Time/TimeState'
import Container from './components/Container'

const App = () => {
	return (
		<TimeState>
			<Container />
		</TimeState>
	)
}

export default App
