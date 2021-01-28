import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import NavBar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';
import FAQitem from '../webparts/faq-item';

export default class FAQ extends React.Component {
  render() {
    return (
      <div className="faq">
        <NavBar />
        <Header />
        <Row center='lg'>
          <Col offset={1} lg={7}>
            <h1 className="faq__title">FAQ</h1>
          </Col>
          <Col lg={6}>
            <FAQitem
              title='What is Boodunnit?'
              body='Boodunnit is a game where you play as Boolia, a ghost who has to solve the mystery of her own murder. She’ll have her sister Emmie by her side to help you, as well as a number of ghostly abilities: the power to possess others, to levitate objects in your surroundings, and the power to pass through thin walls. However, stranger things happen when you combine some of these powers!'
            />
            <FAQitem
              title='Where can I get this game?'
              body='Right now you can get it on Itch.io, Game Jolt and soon on Steam.'
            />
            <FAQitem
              title='What is Studio Koprol?'
              body='Studio Koprol is a hive mind of 16 students that has created the game Boodunnit?! You can learn more about us on the about us page.'
            />
            <FAQitem
              title='Do you have a press kit available?'
              body='Yes, you can find it on our presskit page.'
            />
            <FAQitem
              title='If Boolia is a ghost, why can’t she fly?'
              body='Boolia is a newbie ghost, and doesn’t have a whole lot of ghost powers yet. A few hundred years down the line, who knows what she’ll be able to do!'
            />
            <FAQitem
              title='How much does the game cost?'
              body='NOTHING, it is completely free! Free????, in this day and age? Yes, totally free...'
            />
            <FAQitem
              title='How do I contact you?'
              body='By shooting an email to studiokoprol@gmail.com! We’ll get back to you as soon as we can.'
            />
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}