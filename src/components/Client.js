import React from 'react';
import Avatar from 'react-avatar';

const Client = ({username}) => {
  return (
	console.log(username),
	<div className='client'>
	  <Avatar name={username} size={50} round="14px" />
	  <span className='username'>{username}</span>
	</div>
  );
};

export default Client;
