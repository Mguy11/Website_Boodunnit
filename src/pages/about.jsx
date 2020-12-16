import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Header from '../components/header';
import Footer from '../components/footer';

const members = [
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
  {
    name: "Lorem Ipsum",
    role: "Loremipsum"
  },
]

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header />
        <Row center='lg'>
          <Col offset={1} lg={7}>
            <h1 className="about__title">About Us</h1>
          </Col>
          <Col lg={6}>
            <div className="about__content">
              <h3>Who we are</h3>
              <p>Studio Koprol is an independent indie game studio consisting of 16 passionate students based in the Netherlands. We’re currently working on Boodunnit?! as a part of the Game Design and Development Minor provided by the Rotterdam University of Applied Sciences.</p>
            </div>
            <h2>Team members</h2>
            <ul className="about__members">
              {members.map((member) => {
                const name = member.name;
                const role = member.role;

                return (
                  <li className="member__content">
                    <p className="member__name">{name}</p>
                    <p className="member__description">{role}</p>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
