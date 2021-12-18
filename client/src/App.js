import './App.css';

//Component Imports
import Header from './components/header';
import UploadCSV from './components/UploadCSV';
import Print from './components/print';
import React, { Component } from 'react';

//Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component { 

  constructor(props){
    super(props);
    this.UPLOAD = '0';
    this.PRINT = '1';
    this.state ={
      view : '0',
      table: [],
    }

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleCreateLabel = this.handleCreateLabel.bind(this);
  }

  handleViewChange(event){
    console.log(event.target.attributes.value.value);
    this.setState({view: event.target.attributes.value.value})
  }

  handleCreateLabel(data){
    this.setState({table: data});
    this.setState({view: this.PRINT});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={this.handleViewChange} />
        { this.state.view === this.UPLOAD && <UploadCSV onClick={this.handleCreateLabel} /> }
        { this.state.view === this.PRINT && <Print table={this.state.table} /> }
      </div>
    );
  }
}

export default App;
