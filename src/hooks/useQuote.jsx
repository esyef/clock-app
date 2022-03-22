import { useState, useEffect } from 'react'
import axios from 'axios'
const useQuote = () => {
	const [quote, setQuote] = useState({})
	const [refresh, useRefresh] = useState(false)

	const refreshQuote = () => {
		useRefresh(!refresh)
	}

	useEffect(() => {
		axios.get('https://api.quotable.io/random').then(res => {
			const quote = {
				quote: res.data.content,
				author: res.data.author,
			}
			setQuote(quote)
		})
	}, [refresh])

	return { quote, refreshQuote }
}

export default useQuote
