import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

const QuoteBlock = (props) => {
  return (
    <div className="quote-block">
      <Row center="lg">
        <Col lg={8}>
          <hr className="quote-block__devider" />
          <h2 className="quote-block__text">Lorem Ipsum dolor sit amet, consecte tur adipiscing elit - Lorem Ipsum</h2>
          <hr className="quote-block__devider" />
        </Col>
      </Row>
    </div>
  );
}

export default QuoteBlock;