import config from '../config';

const checkConnection = () =>
{
	return new Promise((resolve, reject) =>
	{
		let request = new XMLHttpRequest();
		request.open('GET', config.endpoint);
		request.timeout = config.timeout;
		request.onload = () =>
		{
			resolve(true);
		};

		request.ontimeout = () =>
		{
			resolve(false);
		};

		request.onerror = () =>
		{
			resolve(false);
		};

		request.send(null);
	});
};

export default {
	checkConnection,
};