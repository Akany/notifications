import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import createNotification from './actions/create-notification';

import Header from './components/header';
import NotificationCreator from './containers/notification-creator';
import NotificationsList from './containers/notifications-list';

class Layout extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<NotificationCreator />
				<NotificationsList />
			</div>
		);
	}
}

var store = createStore(reducer);

window.dis = (name, interval) => {
	store.dispatch(createNotification(name, interval));
};

ReactDom.render(
	<Provider store={store}>
		<Layout />
	</Provider>
, document.getElementById('app'));