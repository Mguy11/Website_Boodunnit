import { render } from '@testing-library/react';
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReactPlayer from 'react-player';

const VideoBlock = () => {
  return (
    <Row center="lg">
      <Col lg={8}>
        <div className="video-block">
          <ReactPlayer
            className='react-player'
            url="https://www.youtube.com/watch?v=9I6sa2JSQ98"
            controls="true"
            pip="true"
            height="100%"
            width="100%"
          />
        </div>
      </Col>
    </Row>
  )
}

export default VideoBlock;