import { connect } from 'react-redux';

import notificationsList from '../components/notifications-list';

import startNotification from '../actions/start-notification';
import stopNotification from '../actions/stop-notification';

export default connect(mapStateToProps, mapDispatchToProps)(notificationsList);

function mapStateToProps(state) {
	return {
		notifications: state.notifications
	};
}

function mapDispatchToProps(dispatch) {
	return {
		startNotification: notification => {
			dispatch(startNotification(notification));
		},
		stopNotification: notification => {
			dispatch(stopNotification(notification));
		}
	};
}