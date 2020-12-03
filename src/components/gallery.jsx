import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

const images = [
  {
    src: "../images/menu.png",
    altText: 'Lorem ipsum dolor sit amet',
  },
  {
    src: '../images/menu.png',
    altText: 'Lorem ipsum dolor sit amet enzooo',
  },
  {
    src: "../images/menu.png",
    altText: 'Lorem ipsum dolor sit amet',
  },
  {
    src: '../images/menu.png',
    altText: 'Lorem ipsum dolor sit amet enzooo',
  },
  {
    src: '../images/menu.png',
    altText: 'Lorem ipsum dolor sit amet enzooo',
  },
  {
    src: '../images/menu.png',
    altText: 'Lorem ipsum dolor sit amet enzooo',
  }
]

export default class Gallery extends Component {

  state = {
    showModal: false,
    captation: '',
    modalSrc: '',
  }
  render() {
    return (
      <div className="gallery">
        <Row center="lg">
          <Col lg={8}>
            <h2>Gallery</h2>
            <Row>
              {images.map((image, index) => {
                const alt = image.altText;
                const src = image.src;
                return (
                  <Col lg={6} className="gallery__wrapper">
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
    )
  }
}