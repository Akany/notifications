import React from 'react';

export default class NotificationCreator extends React.Component {
	constructor() {
		super();

		this.state = {
			value: '',
			period: ''
		};
	}

	submit(event) {
		const { createNotification } = this.props;
		const { value, period } = this.state;

		event.preventDefault();
		createNotification(value, period);
		this.clearState();
	}

	clearState() {
		this.setState({
			value: '',
			period: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				{ this.getDetails() }
				{ this.getPeriod() }
				<div className="form-group">
					<button className="btn btn-success">Create</button>
				</div>
			</form>
		);
	}

	getDetails() {
		return (
			<div className="form-group">
				<label>Notify Details</label>
				<input
					value={ this.state.value }
					onChange={this.onDetailsChange.bind(this)}
					className="form-control"
					type="text"
					placeholder="Your Details"
					minLength="4"
					required
				/>
			</div>
		);
	}

	onDetailsChange(event) {
		var value = event.target.value;

		this.setState({value: value.toUpperCase()});
	}

	getPeriod() {
		return (
			<div className="form-group">
				<label>Notify Period</label>
				<input
					value={ this.state.period }
					onChange={ this.onPeriodChange.bind(this) }
					className="form-control"
					type="number"
					placeholder="Your interval"
					required
				/>
			</div>
		);
	}

	onPeriodChange(event) {
		var value = event.target.value;

		this.setState({period: value});
	}
}