import React from 'react';
// import './SearchForm.css';

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default SearchForm;

// a place in state to store search term
// the function that handles when the user changes the input (form)
