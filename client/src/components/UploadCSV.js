import React, { Component } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

class UploadCSV extends Component {
  constructor(props){
    super(props);
    this.state = {
      filePath:"",
      fileData:""
    };

    this.fileOnChange = this.fileOnChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  fileOnChange(event){
    this.setState({filePath: event.target.value});
  }

  buttonClicked(){
    console.log(this.state.filePath);
    console.log("button clicked");

  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Input CSV file</Form.Label>
                        <Form.Control type="file" onChange={this.fileOnChange} value={this.state.filePath} />
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
  