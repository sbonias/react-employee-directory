import React from 'react';
// import './Table.css';

function TableData(props) {
  return (
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
          </tr>
  );
}

export default TableData;
