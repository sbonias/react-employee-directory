import React from 'react';
import './App.css';
import Header from './components/Header';
// eslint-disable-next-line no-unused-vars
import SearchForm from './components/SearchForm';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="Container">
      <Header />
      <Table />
    </div>
  );
}

export default App;
