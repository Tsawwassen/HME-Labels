import React, { Component } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
let fileReader = new FileReader();

class UploadCSV extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      filePath: {},
      fileData: ""
    };

    this.fileOnChange = this.fileOnChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  

  fileOnChange(event){
    console.log(`file changed ${event.target.files[0].name}`);
    this.setState({filePath: event.target.files[0]});
  }

  handleFileRead(e)  {
    const content = fileReader.result;
    console.log(content)
    // … do something with the 'content' …
  };

  buttonClicked(){
    console.log(`state file patch - ${this.state.filePath}`);
    console.log("button clicked");
  
    
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(this.state.filePath);
    
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
                </Form>
                </Col>
            </Row>
        </Container>
    );
  };
}
  export default UploadCSV;
  