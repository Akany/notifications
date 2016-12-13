import { connect } from 'react-redux';

import notificationsList from '../components/notifications-list';

export default connect(mapStateToProps)(notificationsList);

function mapStateToProps(state) {
	return {
		notifications: state.notifications
	};
}