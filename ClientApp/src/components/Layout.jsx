import React, { Component } from "react";
import { Container, Row, Label, Col, Alert } from "reactstrap";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container
          fluid
          className="m-md-1 p-md-1 border border-primary text-primary themed-container d-flex justify-content-md-center"
        >
          <Row>
            <NavMenu />
            <Col sm={4} className="mt-md-5 border-right border-primary"></Col>
            <Col sm={8}>
              <Row className=" mt-2 d-flex justify-content-md-between">
                <Col>
                  <Label className="font-weight-bold">
                    Sheet #: MP035-9459
                  </Label>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    Ref T.O.P #: 035-9459
                  </Label>
                </Col>
              </Row>
              <Row form className="d-flex justify-content-md-center">
                <Alert
                  color="danger"
                  className=" w-100 m-md-2 p-md-2 font-weight-bold d-flex justify-content-center align-content-center"
                >
                  CORPORATE CONTROLLED THIS IS A MANDATORY PAS SHEET
                </Alert>
              </Row>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
