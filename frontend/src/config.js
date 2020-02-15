export default {
	endpoint: 'https://h2o22yvohk.execute-api.eu-west-1.amazonaws.com/prod/online', // We Could also use an network change event instead but then our api would be totally useless! :(
	timeout: 1000 * 2, // Timeout for http request in ms
	interval: 1000 * 10, // Check every ms for an connection
};