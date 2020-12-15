import React from 'react'
import { Row, Col } from 'react-flexbox-grid';

import Image from '../webparts/image';
import Button from '../webparts/button';

const TextImageBlock = () => {
  return (
    <div className="text-image">
      <Row className="row">
        <Col lgOffset={2} lg={4} >
          <div className="text-image__content">
            <h3 className="text-image__title">Videos and Art</h3>
            <p className="text-image__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum velit eu nunc luctus, at placerat neque vehicula.
              Morbi rhoncus sed sem ut ornare.
            </p>
            <Button
              website="/videos-art"
              btnText="Check it out"
            />
          </div>
        </Col>
        <Col lg={4}>
          <Image
            image="../images/Julia_WebsiteArt_ArtAndVideos.png"
            altText="boolia-video-art"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lgOffset={2} lg={4}>
          <Image
            image="../images/Julia_WebsiteArt_FAQ.png"
            altText="boolia-faq"
          />
        </Col>
        <Col lg={4}>
          <div className="text-image__content">
            <h3 className="text-image__title">FAQ</h3>
            <p className="text-image__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum velit eu nunc luctus, at placerat neque vehicula.
              Morbi rhoncus sed sem ut ornare-
            </p>
            <Button
              website="/faq"
              btnText="Check it out"
            />
          </div>
        </Col>
      </Row>
    </div >
  )
}

export default TextImageBlock;