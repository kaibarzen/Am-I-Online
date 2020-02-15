import React from 'react';

function Online(props)
{
	const {online} = props;

	if (online) // online: true
	{
		return (
			<div className={'yes'}>
				Yes.
			</div>
		);
	}
	else if (online === false) // online: false
	{
		return (
			<div className={'no'}>
				No.
			</div>
		);
	}
	return ( // online: null
		<div className={'checking'}>
			...
		</div>
	);
}

export default Online;