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
  },
  {
    src: '../images/menu.png',
    altText: 'Lorem ipsum dolor sit amet enzooo',
  }
]

export default class Gallery extends Component {

  state = {
    showModal: false,
    caption: '',
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
                      id="myImg"
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
        <div
          id="myModal"
          className="modal"
          style={{ display: this.state.showModal ? 'block' : 'none' }}
        >
          <div>
            <span className="close" onClick={() => this.setState({ showModal: false })}>
              &times;
            </span>
            <img className="modal-content" id="img01" src={this.state.modalSrc} alt={this.props.captation} />
            <div id="caption">
              {this.state.caption}
            </div>
          </div>
        </div>
      </div>
    )
  }
}