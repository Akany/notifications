import React from 'react';

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
				<div key={ key }>
					<h1>{ notification.description }</h1>
					<h3>{ notification.interval }</h3>
				</div>
			);
		})
	}
}