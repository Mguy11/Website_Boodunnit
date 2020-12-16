import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import logo from '../images/icons/studio_koprol_logo.png'
import Socials from '../webparts/socials'

const Footer = (props) => {
  return (
    <div className="footer">
      <Row center="lg">
        <Col lg={8}>
          <div className="footer__content">
            <div className="devider" />

            <ul className="footer__links">
              <li className="footer__link">
                <Link to="/" className="footer__link-text">Home</Link>
              </li>
              <li className="footer__link">
                <Link to="/videos-art" className="footer__link-text">Video's & Art</Link>
              </li>
              <li className="footer__link">
                <Link to="/faq" className="footer__link-text">FAQ</Link>
              </li>
              <li className="footer__link">
                <Link to="/about" className="footer__link-text">About Us</Link>
              </li>
              <li className="footer__link">
                <Link to="/gallery" className="footer__link-text">Gallery</Link>
              </li>
              {/* <li className="footer__link">
                <Link to="/presskit" className="footer__link-text">Presskit</Link>
              </li> */}
              <li className="footer__link">
                <Link to="/privacy" className="footer__link-text">Privacy</Link>
              </li>
            </ul>
            <Socials />
            <p className="footer__copy">&copy;&nbsp;2020 Studio Koprol</p>
            <div className="footer__logo" style={{ backgroundImage: `url(${logo})` }} alt="studio-koprol-logo"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;