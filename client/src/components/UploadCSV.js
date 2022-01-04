import React, { Component } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

let fileReader = new FileReader();

class UploadCSV extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      filePath: {},
      fileData: []
    };

    this.fileOnChange = this.fileOnChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
    this.testButtonClicked = this.testButtonClicked.bind(this);
  }

  testButtonClicked(){
    console.log(this.state.fileData);
  }

  fileOnChange(event){
    console.log(`file changed ${event.target.files[0].name}`);
    this.setState({filePath: event.target.files[0]});
  }

  handleFileRead(e)  {
    /**
     * TODO : this code can probably be cleaned up A LOT, but it is working
     *      The first CSV forEach loop can probably be added into the other forEach loops
     */
    const content = fileReader.result;
    
    const csv = content.split('\n');
    const headers = csv.shift().split(',');
    const table = [];

    csv.forEach((row) => {
      if(row === "") return; //skip row if row is empty, will continue parsing the file
      table.push(row.split(','));
    });
    
    const tempData = []
    table.forEach((row, i) => {
      tempData[i] = {};
      row.forEach((cell, j) =>{
        tempData[i][headers[j]] =  cell;
      });
    });
     console.log(tempData); // Stub test uploaded data
    this.setState({fileData: tempData});
    this.props.onClick(tempData);
  };

  buttonClicked(){ //Not sure if I can put the handleFileRead function code in this block, and reduce the amount of code tracing, but it works.
    fileReader.onloadend = this.handleFileRead;
  
   try{
     fileReader.readAsText(this.state.filePath);
    } catch(error){ }; //Would be nice to have something better then this try catch
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Input CSV file</Form.Label>
                        <Form.Control type="file" onChange={this.fileOnChange}  />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.buttonClicked}>Submit</Button>
                    {/*<Button variant="primary" type="button" onClick={this.testButtonClicked}>TEST</Button>*/}
                </Form>
                </Col>
            </Row>
        </Container>
    );
  };
}
  export default UploadCSV;
  