import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReactPlayer from 'react-player';

const VideoBlock = () => {
  return (
    <div className="video-block">
      <Row center="lg">
        <Col lg={6}>
          <div className="video-block__frame">
            <ReactPlayer
              className='react-player'
              url="https://www.youtube.com/watch?v=LAkoycVHrDA&t=6s"
              controls="true"
              pip="true"
              height="100%"
              width="100%"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default VideoBlock;