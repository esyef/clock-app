import useShowExpand from '../../hooks/useShowExpand'
import { icons } from '../../public/icons'
import styles from './Button.module.css'

const Button = () => {
	const { expand, toggleExpand } = useShowExpand()

	return (
		<a className={styles.showExpand} onClick={toggleExpand}>
			{!expand ? (
				<>
					{' '}
					more <img src={icons.down} className={styles.icon} />{' '}
				</>
			) : (
				<>
					less
					<img src={icons.up} className={styles.icon} />
				</>
			)}
		</a>
	)
}

export default Button
