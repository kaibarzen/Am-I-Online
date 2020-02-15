import React, {Component} from 'react';
import Online from './Online';
import api from './api';
import config from '../config';
import favonline from '../img/online.ico';
import favoffline from '../img/offline.ico';

class App extends Component
{

	state = {
		online: null,
		interval: null,
	};

	render()
	{
		return (
			<div className={'container'}>
				<div className={'question'}>
					Am I Online ?
				</div>
				<div className={'answer'}>
					<Online online={this.state.online}/>
				</div>
				<div className={'notice'}>
					This app works Offline too !
				</div>
			</div>
		);
	}

	componentDidMount()
	{
		checkOnline(this);

		const interval = setInterval(async () =>
		{
			checkOnline(this);
		}, config.interval);

		this.setState({interval});
	}

	componentWillUnmount()
	{
		clearInterval(this.state.interval);
	}
}

/**
 * Function to check and set the online state, also sets the favicon dynamically
 * @param that this
 * @returns {Promise<void>}
 */
const checkOnline = async (that) =>
{
	const status = await api.checkConnection();

	let link = document.querySelector('link[rel*=\'icon\']');
	if (status)
	{
		link.href = favonline;
	}
	else
	{
		link.href = favoffline;
	}

	that.setState({online: status});
};

export default App;
