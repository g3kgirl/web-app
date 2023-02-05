import React from 'react';

import './List.scss';

const List = (props) => {
  return (
    <li className="userlist">
      <h2>{props.fullname}</h2>
      <h3>{props.phone}</h3>
      <h5>{props.email}</h5>
      <p>{props.comment}</p>
    </li>
  );
};

export default List;