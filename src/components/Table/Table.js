import React, { Component } from 'react';
// import './Table.css';
import TableData from './Table-Data';
import TableHeader from './Table-Header';
import SearchForm from '../SearchForm';
import API from '../../utils/API';
import Filter from '../Filter';

class Table extends Component {
  state = {
    result: [],
    search: '',
  };

  // When this component mounts, execute API
  componentDidMount() {
    API.getRandomEmployees()
      .then((res) =>
        this.setState({
          result: res.data.results,
          // filtered: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    // const name = event.target.name;
    console.log(value);
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({ search: '' });
  };

  render() {
    return (
      <div className="Table">
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <TableHeader />
        {this.state.result.map((item) => {
          return (
            <TableData
              className="tableData-item"
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
