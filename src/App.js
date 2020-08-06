import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="Container">
      <Header />
      <SearchForm />
      <Table />
    </div>
  );
}

export default App;
