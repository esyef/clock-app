import useQuote from '../../hooks/useQuote'
import useShowExpand from '../../hooks/useShowExpand'

import { icons } from '../../public/icons'
import styles from './Quote.module.css'

const Quote = () => {
	const { quote, refreshQuote } = useQuote()
	const { expand } = useShowExpand()

	return (
		<article
			className={`${styles.wrapper} ${!expand ? styles.show : styles.hidden}`}
		>
			<div>
				<p className={styles.quote}>{quote.quote}</p>
				<p className={styles.author}>{quote.author}</p>
			</div>
			<a onClick={refreshQuote} className={styles.refresh}>
				<img src={icons.refresh} />
			</a>
		</article>
	)
}

export default Quote
