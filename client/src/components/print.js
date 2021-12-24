import './print.css';


import React, { Component } from 'react';

const  LABELS_PER_ROW = 2; 
const ROWS_PER_PAGE = 3;

function Label(props){
  
  let index = props.label + (props.row * LABELS_PER_ROW) + ((props.page * (LABELS_PER_ROW+ROWS_PER_PAGE)) + props.page); 
  //I wonder if this logic works for any value for LABELS_PER_ROW and ROWS_PER_PAGE
  
  if(index >= props.table.length) return <div className='Label'></div>; //Return empty label div to avoid array out of bounds error
  
  return (<div className='label' >
            <h1>{props.table[index].part_number} </h1>
          </div>);
}

function Row(props){
  let labels = []
  for(let i = 0 ; i < LABELS_PER_ROW ; i++){
    labels.push(<Label key={i} label={i} {...props} />);
  }

  return (<div className='label_row'> {labels} </div>)
}

function Page(props){
  
  let rows = [];
  for(let i = 0 ; i < ROWS_PER_PAGE ; i++){
    rows.push(<Row key={i} row={i} {...props} />);
  }
  return (<div className='label_page'> {rows} </div>)
}

function Display(props){
  
  let numberOfPages = parseInt(props.table.length / 6);
  if((props.table.length % 6) !== 0) numberOfPages += 1;
  
  let pages = [];
  for (let i = 0 ; i < numberOfPages ; i++){
    pages.push(<Page key={i} page={i} {...props }/>);
  }

  return (<div> {pages} </div>)
}

class Print extends Component {
  
  constructor(props){
    super(props);
    this.state = {
     
    };
    
  }
  
  render() {return <Display {...this.props } />};
}
  export default Print;
  