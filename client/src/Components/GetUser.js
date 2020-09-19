import React from 'react';

const GetUser = (props) => {
  return (
    <div className="get-user">
      <h2>Get logged in user</h2>
      <div id="user">{props.user.username}</div>
    </div>
  )
};

export default GetUser;