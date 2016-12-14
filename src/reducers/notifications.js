function notification(description, interval) {
	return {
		description,
		interval
	};
}

export default function notifications(state = [], action) {
	switch (action.type) {
		case 'ADD_NOTIFICATION':
			return [
				...state,
				notification(action.description, action.interval)
			];
		default:
			return state;
	}
}