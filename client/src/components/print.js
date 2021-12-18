import React, { Component } from 'react';

class Print extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
      console.log(this.props.table);
    return (
      <h1>HELLO</h1>
    );
  };
}
  export default Print;
  