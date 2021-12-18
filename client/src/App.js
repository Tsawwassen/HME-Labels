import './App.css';

//Component Imports
import Header from './components/header';
import UploadCSV from './components/UploadCSV';
import React, { Component } from 'react';

//Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <UploadCSV />
      </div>
    );
  }
}

export default App;
