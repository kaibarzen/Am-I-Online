'use strict';

/**
 * Return body {online: true} to indicate that the user is online
 * @param event
 * @param context
 * @returns {Promise<{body: string, statusCode: number}>}
 */
const online = async (event, context) =>
{
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify(
			{
				online: true,
			},
		),
	};
};

module.exports = {
	online,
};
