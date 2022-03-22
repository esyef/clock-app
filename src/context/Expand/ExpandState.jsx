import { useState } from 'react'
import { ExpandContext } from './ExpandContext'

export const ExpandState = ({ children }) => {
	const [expand, setExpand] = useState(false)
	const toggleExpand = () => setExpand(!expand)

	return (
		<ExpandContext.Provider value={{ expand, toggleExpand }}>
			{children}
		</ExpandContext.Provider>
	)
}
