import React from 'react';
import { Row, Col } from 'react-flexbox-grid'

import NavBar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const images = [
  {
    src: "../images/gallery/SS06.png",
    altText: "Boolia at the start of the tutorial",
  },
  {
    src: "../images/gallery/SS07.png",
    altText: "Boolia thinking about her life",
  },
  {
    src: "../images/gallery/SS08.png",
    altText: "Boolia looking back at her first obstacles",
  },
  {
    src: "../images/gallery/SS09.png",
    altText: "The resurrection of Julia",
  },
  {
    src: "../images/gallery/SS10.png",
    altText: "Chilling with Mr.Boonkle's statue",
  },
  {
    src: "../images/gallery/SS17.png",
    altText: "Boolia looking for a way to cross the gap",
  },
  {
    src: "../images/gallery/SS12.png",
    altText: "Hmmm... a sleepy guy",
  },
  {
    src: "../images/gallery/SS13.png",
    altText: "Boolia relaxing at a bench",
  },
  {
    src: "../images/gallery/SS14.png",
    altText: "Ahhhh the sea",
  },
  {
    src: "../images/gallery/SS01.jpg",
    altText: "Boolia enjoying the view",
  },
  {
    src: "../images/gallery/SS02.jpg",
    altText: "Boolia scaring vincent the vigilante",
  },
  {
    src: "../images/gallery/SS03.jpg",
    altText: "The rat climbing some vines",
  },
  {
    src: "../images/gallery/SS04.jpg",
    altText: "Floaty bird",
  },
  {
    src: "../images/gallery/SS05.jpg",
    altText: "Annie is scared of rats!",
  },
  {
    src: "../images/gallery/SS15.png",
    altText: "First day on the job",
  },
  {
    src: "../images/gallery/SS16.png",
    altText: "Bird chilling on the roof",
  }
]

export default class Gallery extends React.Component {
  state = {
    showModal: false,
    captation: '',
    modalSrc: '',
  }
  render() {
    return (
      <div className="gallery">
        <NavBar />
        <Header />
        <div className="gallery">
          <Row center="lg">
            <Col lg={9}>
              <h2>Gallery</h2>
              <Row style={{ marginBottom: '0' }}>
                <div className="gallery__wrapper">
                  {images.map((image, index) => {
                    const alt = image.altText;
                    const src = image.src;
                    return (
                      <Col lg={3} className="gallery__image-wrapper">
                        <div
                          key={index}
                          alt={image.altText}
                          style={{ backgroundImage: `url(${image.src})` }}
                          className="gallery__image"
                          onClick={() => {
                            this.setState({ showModal: true, captation: alt, modalSrc: src })
                          }}
                        />
                      </Col>
                    )
                  })}
                </div>
              </Row>
            </Col>
          </Row>
          <div id="modal" className="modal" data-target="#myModal" style={{ display: this.state.showModal ? 'block' : 'none' }} >
            <div className="modal__content">
              <span className="modal__close" onClick={() => this.setState({ showModal: false })}>
                &times;
              </span>
              <img className="modal__image" id={this.state.index} src={this.state.modalSrc} alt={this.props.captation} />
              <div class="modal__captation">
                {this.state.captation}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

