import React, { Component } from 'react';
// import './Table.css';
import TableData from './Table-Data';
import TableHeader from './Table-Header';
import API from '../../utils/API';

class Table extends Component {
  state = {
    result: {},
    search: '',
  };

  // When this component mounts, execute API

  componentDidMount() {
    this.searchEmployees('Sam');
  }

  searchEmployees = (query) => {
    API.getRandomEmployees(query)
      .then((res) => this.setState({ result: res.data }))
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
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div className="Table">
        <table className="table">
          <thead>
            <TableHeader />
            <TableData />
          </thead>
        </table>
      </div>
    );
  }
}
export default Table;
