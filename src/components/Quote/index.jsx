import useQuote from '../../hooks/useQuote'
import useShowExpand from '../../hooks/useShowExpand'

import { icons } from '../../public/icons'

const Quote = () => {
	const { quote, refreshQuote } = useQuote()
	const { expand } = useShowExpand()

	return (
		<article
			className={`${expand ? 'hidden' : 'flex'} justify-between max-w-lg`}
		>
			<div className='font-normal text-sm md:text-lg lg:text-xl leading-5  md:leading-7 w-11/12 md:w-md'>
				<p>{quote.quote}</p>
				<p className='font-bold'>{quote.author}</p>
			</div>
			<div role='button'>
				<a role='button' onClick={refreshQuote} className='inline-block'>
					<img src={icons.refresh} role='img' />
				</a>
			</div>
		</article>
	)
}

export default Quote
