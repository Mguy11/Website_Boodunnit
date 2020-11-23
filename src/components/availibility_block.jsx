import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

const AvailibilityBlock = () => {
  return (
    <div className="avalibility">
      <Row center="lg">
        <Col lg={5}>
          <h2>Available February 1st 2021</h2>
        </Col>
      </Row>
    </div>
  );
}

export default AvailibilityBlock;