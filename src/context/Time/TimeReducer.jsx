export const TimeReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case 'GETLOCATION':
			return { ...state, location: payload, isLoading: false }

		case 'GETTIME':
			return { ...state, time: payload }

		default:
			return state
	}
}
