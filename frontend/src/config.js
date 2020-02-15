export default {
	endpoint: 'https://g6op1mvayh.execute-api.eu-central-1.amazonaws.com/production/online', // We Could also use an network change event instead but then our api would be totally useless! :(
	timeout: 1000 * 2, // Timeout for http request in ms
	interval: 1000 * 10, // Check every ms for an connection
};