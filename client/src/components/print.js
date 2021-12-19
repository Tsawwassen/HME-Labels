import './print.css';


import React, { Component } from 'react';

const  LABELS_PER_ROW = 2; 
const ROWS_PER_PAGE = 3;

function Label(props){
  
  let index = props.label + (props.row * LABELS_PER_ROW) + ((props.page * (LABELS_PER_ROW+ROWS_PER_PAGE)) + props.page);
  
  if(index >= props.table.length) return <div className='Label'></div>;
  
  return (<div className='Label' >
      <h1>{props.table[index].part_number} </h1>
    </div>);
}

function Row(props){
  let labels = []
  for(let i = 0 ; i < LABELS_PER_ROW ; i++){
    labels.push(<Label key={i} label={i} {...props} />);
  }

  return (<div className='Row'>
            {labels}
          </div>)
}

function Page(props){
  
  let rows = [];
  for(let i = 0 ; i < ROWS_PER_PAGE ; i++){
    rows.push(<Row key={i} row={i} {...props} />);
  }
  return (<div className='Page'>
            {rows}
          </div>)
}

function Display(props){
  
  let numberOfPages = parseInt(props.table.length / 6);
  if((props.table.length % 6) !== 0) numberOfPages += 1;
  
  let pages = [];
  for (let i = 0 ; i < numberOfPages ; i++){
    pages.push(<Page key={i} page={i} {...props }/>);
  }

  return (<div>
            {pages}
          </div>)
}

class Print extends Component {
  
  constructor(props){
    super(props);
    this.state = {
     
    };
    
  }
  
 

  render() {
      //console.log(this.props.table);
      //Every 2 labels, create new row
      //Every 6 labels, create new page (for printing)
      //Test that the app works fine when the number of labels is < a full page (this.props.table.length % 6 != 0)

      // <div className='Row'>
      //           <div className='Label'></div>
      //           <div className='Label'></div>
      //         </div>
      //         <div className='Row'>
      //           <div className='Label'></div>
      //           <div className='Label'></div>
      //         </div>

      // this.props.table.forEach((label, index) => {
      //   console.log(label);
      // });
    
    
    
    return (
              
                <Display {...this.props }/>
                
            
              
    );
  };
}
  export default Print;
  