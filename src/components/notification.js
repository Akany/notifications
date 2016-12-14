import React from 'react';

require('./notification.scss');

export default class Notification extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { notification } = this.props;

		return (
			<div className="notification">
				<div className="notification-body">
					<div className="notification-title">
						{ notification.description }
					</div>
					<div className="notification-interval">
						Interval: { notification.interval }
					</div>
				</div>
				<div>
					<button className="btn btn-success">Start</button>
				</div>
			</div>
		);
	}
}