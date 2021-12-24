import './print.css';


import React, { Component } from 'react';
var Barcode = require('react-barcode');
var startCase = require('lodash.startcase');

const  LABELS_PER_ROW = 2; 
const ROWS_PER_PAGE = 3;

function Label(props){
  
  let index = props.label + (props.row * LABELS_PER_ROW) + ((props.page * (LABELS_PER_ROW+ROWS_PER_PAGE)) + props.page); 
  //I wonder if this logic works for any value for LABELS_PER_ROW and ROWS_PER_PAGE

  let barcodeOptions = {
                width: 2,
                height: 50,
                format: "CODE128",
                displayValue: true,
                fontOptions: "",
                font: "monospace",
                textAlign: "center",
                textPosition: "bottom",
                textMargin: 2,
                fontSize: 20,
                background: "#ffffff",
                lineColor: "#000000",
                margin: 10,
                marginTop: undefined,
                marginBottom: undefined,
                marginLeft: undefined,
                marginRight: undefined
  };
  
  if(index >= props.table.length) return <div className='Label'></div>; //Return empty label div to avoid array out of bounds error
  
  //change header keys here to display correct info from csv file
  return (<div className='label' > 
            <table>
              <tbody>
                <tr>
                  <th>{startCase(Object.keys(props.table[0])[0])}</th>
                  <td colSpan="2">{props.table[index].part_number}</td>
                </tr>
                <tr>
                <th>{startCase(Object.keys(props.table[0])[1])}</th>
                  <td colSpan="2">{props.table[index].supplier}</td>
                </tr>
                <tr>
                <th>{startCase(Object.keys(props.table[0])[2])}</th>
                  <td colSpan="2">{props.table[index].description} </td>
                </tr>
              </tbody>
            </table>
            
            <Barcode value={props.table[index].part_number} {...barcodeOptions} />
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
  