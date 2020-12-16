import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import NavBar from '../components/navbar';
import Header from '../components/header';
import Socials from '../webparts/socials';
import Footer from '../components/footer';

const members = [
  {
    name: "Maya Bloem",
    role: "Game Design Lead"
  },
  {
    name: "Lucas Lotstra",
    role: "Game Designer"
  },
  {
    name: "Martijn Bankert",
    role: "Game Designer"
  },
  {
    name: "Kela van der Deijl",
    role: "Art Lead"
  },
  {
    name: "Sven Koene",
    role: "Artist"
  },
  {
    name: "Brainillio Imambaks Rodriques",
    role: "Artist"
  },
  {
    name: "Jorrik Dillisse",
    role: "Artist"
  },
  {
    name: "Mischa ",
    role: "Artist"
  },
  {
    name: "Patrick",
    role: "Development Lead"
  },
  {
    name: "Tim van Hal",
    role: "Developer"
  },
  {
    name: "Daryl van den Berg",
    role: "Developer"
  },
  {
    name: "Nienke Overmeer",
    role: "Developer"
  },
  {
    name: "Jesse Minneboo",
    role: "Developer"
  },
  {
    name: "Ryan Rooijakkers",
    role: "Developer"
  },
  {
    name: "Nathan ",
    role: "Developer"
  },
]

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <NavBar />
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
          </Col>
        </Row>
        <Row center='lg'>
          <Col lg={6}>
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
        <Row center='lg'>
          <Col lg={6}>
            <div className="about__content">
              <h3>Contact us</h3>
              <p>That’s always welcome! You can contact us by sending a message to studiokoprol@gmail.com, and we’ll get back to you as soon as possible! Otherwise, you can stay updated on all things Boodunnit?! by following us on our socials!</p>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
