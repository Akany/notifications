import { combineReducers } from 'redux';

import notifications from './notifications';
import runningNotification from './running-notifications';

export default combineReducers({
	notifications: notifications,
	runningNotifications: runningNotification
});