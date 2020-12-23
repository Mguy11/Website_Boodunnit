import React from 'react'
import { Row, Col } from 'react-flexbox-grid';

const TextBlock = () => {
  return (
    <div className="text-block">
      <Row>
        <Col lgOffset={3} lg={6}>
          <h2 className="text-block__title">Story</h2>
          <p className="text-block__intro">
            Boodunnit?! is an adventure-sandbox game game where you play as a ghost that has to solve the mystery of her own murder!
          </p>
          <p className="text-block__paragraph">
            The village of Boonkle is peaceful, quiet, and remarkably crime-free, until one fateful Tuesday when florist and ex-detective Julia Lawson suddenly dies under mysterious circumstances. <br /><br />
            Bummer.<br /> <br />
            Now in the form of a ghost, her naturally curious character compels her to figure out how she died. Besides, if she doesn’t, she won’t be able to move on to the afterlife.<br /> <br />
            With the help of her sister Emmie, Julia (known as Boo-lia, in her ghost form) can dash, levitate, and possess her way through Boonkle vistas to gather clues and piece the puzzle together!
          </p>
        </Col>
      </Row>
    </div >
  )
}

export default TextBlock;