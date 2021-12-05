import React, { Component } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';

class UploadCSV extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    );
  };
}
  export default UploadCSV;
  