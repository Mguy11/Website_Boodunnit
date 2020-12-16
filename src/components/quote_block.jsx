import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

const QuoteBlock = (props) => {
  return (
    <div className="quote-block">
      <Row center="lg">
        <Col lg={6}>
          <div className="devider" />
          <div>
            <p className="quote-block__text">Boodunnit?! is the best thing since sliced bread.</p>
          </div>
          <div className="devider" />
        </Col>
      </Row>
    </div >
  );
}

export default QuoteBlock;