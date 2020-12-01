import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import PlatformButton from '../webparts/platform_button';

const AvailibilityBlock = (props) => {
  return (
    <div className="availibility-block">
      <Row center="lg">
        <Col lg={6}>
          <div className="availibility">
            <h2 className="availibility__title">Available February 1st 2021</h2>
            <hr className="availibility__devider" />
            <div className="availibility__box">
              <h4 className="availibility__platforms">Windows - Mac - Linux</h4>
            </div>
            <div className="availibility__icons">
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
    </div>
  );
}

export default AvailibilityBlock;