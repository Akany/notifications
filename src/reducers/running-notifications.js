export default function (state = [], action) {
	switch (action.type) {
		case 'START_NOTIFICATION':
			return [
				...state,
				action.notification
			];
		case 'STOP_NOTIFICATION':
			return state.filter(notification => {
				return notification !== action.notification;
			});
		default:
			return state;
	}
}