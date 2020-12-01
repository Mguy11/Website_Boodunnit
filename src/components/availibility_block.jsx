import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import PlatformButton from '../webparts/platform_button';

const AvailibilityBlock = (props) => {
  return (
    <Row center="lg">
      <Col lg={5}>
        <div className="avalibility">
          <h2>Available February 1st 2021</h2>
          <div className="avalibility__box">
            <h4 className="availibility__title">Windows - Mac - Linux</h4>
          </div>
          <div className="avalibility__icons">
            <PlatformButton
              website='https://store.steampowered.com'
              image='../images/icons/steam.png'
              altText="steam-icon"
            />
            <PlatformButton
              website="https://www.epicgames.com/store/en-US/"
              image="../images/icons/epic-games-icon.png"
              altText="epic-games-icon"
            />
            <PlatformButton
              website="https://itch.io"
              image="../images/icons/itch-io-icon.png"
              altText="itchio-icon"
            />
            <PlatformButton
              website="https://www.gog.com"
              image="../images/icons/gog-galaxy-icon.png"
              altText="gog-icon"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default AvailibilityBlock;