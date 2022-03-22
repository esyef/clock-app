import { useContext } from 'react'
import { ExpandContext } from '../context/Expand/ExpandContext'

const useShowExpand = () => {
	const { expand, toggleExpand } = useContext(ExpandContext)

	return { expand, toggleExpand }
}

export default useShowExpand
