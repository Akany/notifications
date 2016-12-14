import React from 'react';

require('./notification.scss');

export default class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false
		};
	}

	render() {
		const { notification, start } = this.props;

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
					{this.getAction()}
				</div>
			</div>
		);
	}

	getAction() {
		return this.state.running ?
			<button className="btn btn-danger" onClick={this.stop.bind(this)}>Stop</button> :
			<button className="btn btn-success" onClick={this.start.bind(this)}>Start</button>
	}

	start() {
		const { start, notification } = this.props;
		
		start();
		this.interval = setInterval(() => {
			console.log(notification.description);
		}, notification.interval);
		this.setState({running: true});
	}

	stop() {
		const { stop } = this.props;

		clearInterval(this.interval);
		this.setState({running: false});
		stop();
	}
}