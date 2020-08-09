import React, { Component } from 'react';
// import './Table.css';
import TableData from './Table-Data';
import TableHeader from './Table-Header';
import SearchForm from '../SearchForm';
import API from '../../utils/API';
import Filter from '../Filter';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      filterResults: [],
    };
  }

  // When this component mounts, execute API
  componentDidMount() {
    API.getRandomEmployees()
      .then((res) =>
        this.setState({
          result: res.data.results,
          filterResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    // const name = event.target.name;
    console.log(value);
    this.setState({
      filterResults: value,
    });
    this.filterResults();
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  // https://medium.com/@AndrewBonner2/filter-results-with-react-f746dc7984c
  filterResults = (resultFilter) => {
    let filterResults = this.state.result;
    filterResults = filterResults.filter((result) => {
      let resultName =
        result.firstName.toLowerCase() + result.lastName.toLowerCase();
      return resultName.indexOf(resultFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filterResults,
    });
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
        <Filter
          result={this.state.filterResults}
          match={this.props.match}
          onChange={this.filterResults}
        ></Filter>
      </div>
    );
  }
}
export default Table;
