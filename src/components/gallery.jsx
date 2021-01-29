import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Button from '../webparts/button'

const images = [
  {
    src: '../images/gallery/SS01.jpg',
    altText: 'Boolia in thoughts',
  },
  {
    src: '../images/gallery/SS02.jpg',
    altText: 'Boolia attacking Vincent the vigilante',
  },
  {
    src: '../images/gallery/SS03.jpg',
    altText: 'Rat climbing the vines',
  },
  {
    src: '../images/gallery/SS04.jpg',
    altText: 'Bird gliding through the air',
  },
  {
    src: '../images/gallery/SS05.jpg',
    altText: 'Annie does not like rats!',
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
          <Col lg={6}>
            <h2>Gallery</h2>
            <Row style={{ marginBottom: '0' }}>
              <div className="gallery__wrapper">
                {images.map((image, index) => {
                  const alt = image.altText;
                  const src = image.src;
                  return (
                    <Col lg={6} className="gallery__image-wrapper">
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
              <div style={{ width: '100%', marginTop: '4rem' }}>
                <Button
                  website="/gallery"
                  btnText="Go to gallery"
                />
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
    )
  }
}