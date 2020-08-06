import React, { Component } from 'react';
// import './Table.css';
import TableData from './Table-Data';
import TableHeader from './Table-Header';
import API from '../../utils/API';

class Table extends Component {
  state = {
    result: [],
    search: '',
  };

  // When this component mounts, execute API

  componentDidMount() {
    this.searchEmployees('');
  }

  searchEmployees = (query) => {
    API.getRandomEmployees(query)
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.getRandomEmployees);
  };

  render() {
    return (
      <div className="Table">
        <TableHeader />
        {this.state.result.map((item) => {
          return (
            <TableData
              className="tableData-item"
              key={item.id.value}
              firstName={item.name.first}
              lastName={item.name.last}
              email={item.email}
            ></TableData>
          );
        })}
      </div>
    );
  }
}
export default Table;
