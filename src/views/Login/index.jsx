import React from 'react';
import { Container, Jumbotron, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Login = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Jumbotron>
            <h1 className="display-6">Login</h1>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="something@idk.cool"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" className="mr-sm-2">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="don't tell!"
                />
              </FormGroup>
              <FormGroup>
                <Button>Submit</Button>
              </FormGroup>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
