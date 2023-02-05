import React from 'react';

import List from './List';
import './Details.scss';

const Details = (props) => {
  return (
    <ul className="user-list">
      {props.userNames.map((user) => (
        <List
          key={user.id}
          fullname={user.fullname}
          phone={user.phone}
          email={user.email}
          comment={user.comment}
        />
      ))}
    </ul>
  );
};

export default Details;