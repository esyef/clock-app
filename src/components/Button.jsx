import styles from '../styles/styles.module.css'
import IconDown from '../public/icon-arrow-down.svg'

const Button = () => {
	return (
		<a className={styles.button}>
			<span className={styles.btnTxt}>more</span>
			<span className={styles.btnIcon}>
				<img src={IconDown} alt='' />
			</span>
		</a>
	)
}

export default Button
