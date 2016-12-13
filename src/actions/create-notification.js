export default function createNotification(description, interval) {
	return {
		type: 'ADD_NOTIFICATION',
		description,
		interval
	};
}