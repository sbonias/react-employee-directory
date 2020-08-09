import React from 'react';
// import './Table.css';

function Filter(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default Filter;
