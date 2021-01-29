import React from 'react';
import { Row, Col } from 'react-flexbox-grid'

import NavBar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const images = [
  {
    src: "../images/gallery/SS06.png",
    altText: "memes",
  },
  {
    src: "../images/gallery/SS07.png",
    altText: "Levitate objects with your ghost abilities",
  },
  {
    src: "../images/gallery/SS08.png",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS09.png",
    altText: "Create your own path",
  },
  {
    src: "../images/gallery/SS10.png",
    altText: "Use special abilities to create new routes",
  },
  {
    src: "../images/gallery/SS17.png",
    altText: "So sad, but you are back",
  },
  {
    src: "../images/gallery/SS12.png",
    altText: "memes",
  },
  {
    src: "../images/gallery/SS13.png",
    altText: "Levitate objects with your ghost abilities",
  },
  {
    src: "../images/gallery/SS14.png",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS01.jpg",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS02.jpg",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS03.jpg",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS04.jpg",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS05.jpg",
    altText: "You can also possess other living beings",
  },
  {
    src: "../images/gallery/SS15.png",
    altText: "Create your own path",
  },
  {
    src: "../images/gallery/SS16.png",
    altText: "Use special abilities to create new routes",
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

