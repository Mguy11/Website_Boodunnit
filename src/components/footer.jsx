import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

const Footer = (props) => {
  return (
    <div className="footer">
      <Row center="lg">
        <Col lg={8}>
          <hr className="footer__devider" />

        </Col>
      </Row>
    </div>
  );
}

export default Footer;