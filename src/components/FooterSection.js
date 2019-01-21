import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterSection extends React.Component {
render() {
return (
<Footer color="blue" className="sticky-bottom font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <p>
      Copyright © 2018 | Fernando Aguilar
      </p>
      </Col>
      {/* <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col> */}
    </Row>
  </Container>
</Footer>
);
}
}

export default FooterSection;