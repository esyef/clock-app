import styles from '../styles/styles.module.css'
import { icons } from '../public/icons'

const quoteContainer = () => {
	return (
		<article className={styles.quote}>
			<div className={styles.quoteContent}>
				<p className={styles.quoteText}>
					“The science of operations, as derived from mathematics more
					especially, is a science of itself, and has its own abstract truth and
					value.”
				</p>
				<span className={styles.quoteAuthor}>Ada Lovelace</span>
			</div>
			<a className={styles.refreshBtn}>
				<img src={icons.refresh} alt='icon refresh' />
			</a>
		</article>
	)
}

export default quoteContainer
