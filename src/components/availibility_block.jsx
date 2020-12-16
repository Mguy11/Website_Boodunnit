import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import PlatformButton from '../webparts/platform_button';

const AvailibilityBlock = (props) => {
  return (
    <div className="availibility-block">
      <Row center="lg">
        <Col lg={6}>
          <div className="availibility">
            <h1 className="availibility__title">Available Now</h1>
            <div className="devider" />
            <div className="availibility__box" />
            <div className="availibility__icons">
              {/* <PlatformButton
                website='https://store.steampowered.com'
                image='../images/icons/Logo_Steam.png'
                altText="steam-icon"
              />
              <PlatformButton
                website="https://www.epicgames.com/store/en-US/"
                image="../images/icons/Logo_EpicGames.png"
                altText="epic-games-icon"
              /> */}
              <PlatformButton
                website="https://itch.io"
                image="../images/icons/Logo_itch.png"
                altText="itchio-icon"
              />
              {/* <PlatformButton
                website="https://www.gog.com"
                image="../images/icons/Logo_GOG.png"
                altText="gog-icon"
              /> */}
            </div>
            <span className="availibility__soon">*other platforms coming soon...</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AvailibilityBlock;