import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import facebook from '../images/icons/Socials_Facebook.png';
import instagram from '../images/icons/Socials_Instagram.png';
import twitter from '../images/icons/Socials_Twitter.png';
import discord from '../images/icons/Socials_Discord.png';

const Socials = () => {
  return (
    <div className="socials">
      <Row center="lg" style={{ minHeight: 0 }}>
        <Col lg={3}>
          <div className="socials__icons">
            <a
              href="https://www.facebook.com/studiokoprol"
              target="__blank"
              alt='facebook-icon'
              draggable="false"
              className="socials__icon"
              style={{ backgroundImage: `url(${facebook})` }}>
            </a>
            <a
              href="https://www.instagram.com/studiokoprol/"
              target="__blank"
              alt='instagram-icon'
              draggable="false"
              className="socials__icon"
              style={{ backgroundImage: `url(${instagram})` }}>
            </a>
            <a
              href="https://twitter.com/StudioKoprol"
              target="__blank"
              alt='twitter-icon'
              draggable="false"
              className="socials__icon"
              style={{ backgroundImage: `url(${twitter})` }}>
            </a>
            <a
              href="https://discord.gg/m7ND6AqAK3"
              target="__blank"
              alt='discord-icon'
              draggable="false"
              className="socials__icon"
              style={{ backgroundImage: `url(${discord})` }}>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Socials;