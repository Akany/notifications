import React from 'react';

import Notification from './notification';

export default class NotificationsList extends React.Component {
	render() {
		const { notifications } = this.props;

		return (
			<h1>{ this.mapNotifications(notifications) }</h1>
		);
	}

	mapNotifications(notifications) {
		return notifications.map((notification, key) => {
			return (
				<Notification key={ key } notification={ notification } />
			);
		})
	}
}