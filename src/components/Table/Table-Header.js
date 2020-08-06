import React from 'react';
// import './Table.css';

function TableHeader() {
  return (
    <div className="TableHeader">
      <table className="tableHeader">
        <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableHeader;
