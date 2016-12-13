import { connect } from 'react-redux';

import NotificationCreator from '../components/notification-creator';
import createNotification from '../actions/create-notification';

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCreator);

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		createNotification: (desc, interval) => {
			const action = createNotification(desc, interval);

			dispatch(action);
		}
	};
}
