import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Header from '../components/header';
import Footer from '../components/footer';

const Privacy = () => {
  return (
    <div className="privacy">
      <Header />
      <Row center="lg">
        <Col lg={5}>
          <div className="privacy__content">
            <h1>Studio Koprol Privacy Policy</h1>
            <p>
              This privacy policy applies to the information Studio Koprol (hereinafter referred to as "We") collects about you when you use the website, videogame or other services ("Services"). "you" and "your" mean the user of our Services. In this policy, we want to be clear about the collection of your information.
              If you do not agree to this Privacy Policy, please do not use the Services. Your continued use of the Services will signify your acceptance of these changes.
            </p>
            <h2>1. Collection of information</h2>
            <h3>Testing</h3>
            <p>During testing interviews we ask for your personal data (Name, age and gender) and findings in the game. This data will only be collected after you sign the agreement.</p>
            <h3>Game(s)</h3>
            <p>The game uses our own analyzing tool which collects position and mechanics data. This data is compiled into a JSON file and sent to our server. </p>
            <h2>2. Purpose of the collection</h2>
            <p>The purpose of the collection is to analyse usage and to improve our game. For example: position and mechanics data are collected to analyse player behaviour and improve level design.</p>
            <h2>3. Sharing of information</h2>
            <p>Studio Koprol does not rent or sell your information to third parties for marketing or financial purposes.</p>
            <h2>4. Contact Us</h2>
            <p>This Privacy Policy shall be governed by the laws of The Netherlands and submitted to the exclusive jurisdiction of the courts in The Netherlands.</p>
            <br />
            <p>If you have any questions or concerns about this Privacy Policy or its implementations, you may contact us at: <a className="privacy__mail" href="mailto:studiokoprol@gmail.com">studiokoprol@gmail.com</a></p>
            <h2>5. Changes of this Privacy Policy</h2>
            <p>We reserve the right to make changes in this Privacy Policy, so please check back from time to time to ensure you are always aware of any changes.</p>
            <h2>6. Miscellaneous</h2>
            <ul className="privacy__list">
              <li>Studio Koprol</li>
              <li>The Netherlands</li>
              <li>&copy;&nbsp;2020 Studio Koprol - All rights reserved.</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Privacy;

