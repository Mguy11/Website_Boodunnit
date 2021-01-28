import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReactPlayer from 'react-player';

import NavBar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const images = [
  {
    src: '../images/art/IMG_6289.PNG',
    altText: 'Basic mechanics',
  },
  {
    src: '../images/art/IMG_6293.PNG',
    altText: 'Specialized conversations',
  },
  {
    src: '../images/art/IMG_6295.PNG',
    altText: 'Scare States',
  },
  {
    src: '../images/art/NPC_Emmie_Turnaround.png',
    altText: 'Emmie concept art',
  },
  {
    src: '../images/art/DonutsPile.PNG',
    altText: 'Hmmmmm Donuts',
  },
  {
    src: '../images/art/Boodunnit_Kela_ArtTest01.PNG',
    altText: 'Town concept art',
  },
  {
    src: '../images/art/Boodunnit_Kela_ArtTest04.jpg',
    altText: 'Town concept art with lighting',
  },
  {
    src: '../images/art/Boodunnit_Kela_ArtTest06.jpg',
    altText: 'Town render',
  },
  {
    src: '../images/art/Capture.PNG',
    altText: 'Villager modeling',
  },
  {
    src: '../images/art/06nov_1620.PNG',
    altText: 'Villager size comparison',
  },
  {
    src: "../images/art/Julia_Render_04_2.png",
    altText: 'Boolia in her natural habitat',
  },
  {
    src: "../images/art/PoliceOfficer3_Render_Scared.png",
    altText: 'Scare introduction',
  },
  {
    src: '../images/art/SirBoonkle_Render_01.png',
    altText: 'Mr.Boonkle concept art',
  },
  {
    src: '../images/art/SirBloemkool2.png',
    altText: 'Mr.Bloemkool',
  },
  {
    src: '../images/art/PreTutorialLevel.png',
    altText: 'Boolia surfing on clouds',
  },
  {
    src: '../images/art/07jan2021_crimescene_alley.PNG',
    altText: 'Crimescene alley shot',
  },
  {
    src: '../images/art/07jan2021_crimescene_street01.PNG',
    altText: 'CrimeScene street shot',
  },
  {
    src: '../images/art/07jan2021_crimescene_town.PNG',
    altText: 'Boonkle skyline',
  },
  {
    src: '../images/art/Annie.PNG',
    altText: 'Boolia and Annie hanging around',
  },
  {
    src: '../images/art/SS01.jpg',
    altText: 'Boolia in thoughts',
  },
  {
    src: '../images/art/SS02.jpg',
    altText: 'Boolia attacking Vincent the vigilante',
  },
  {
    src: '../images/art/SS03.jpg',
    altText: 'Rat climbing the vines',
  },
  {
    src: '../images/art/SS04.jpg',
    altText: 'Bird gliding through the air',
  },
  {
    src: '../images/art/SS05.jpg',
    altText: 'Annie does not like rats!',
  },

]

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=L-UHuIZ41-A&t=1s'
  },
  {
    url: 'https://www.youtube.com/watch?v=9I6sa2JSQ98'
  },
  {
    url: 'https://www.youtube.com/watch?v=miHQTW7NgQs&t=6s'
  },
  {
    url: 'https://www.youtube.com/watch?v=YOY-U21dzy0'
  },
  {
    url: 'https://www.youtube.com/watch?v=ODwJ0rk_mQ4'
  },
]

export default class VideoArt extends React.Component {
  state = {
    showModal: false,
    captation: '',
    modalSrc: '',
  }
  render() {
    return (
      <div className="videoart">
        <NavBar />
        <Header />
        <Row center="lg">
          <Col lg={10}>
            <h1 className="videoart__title">Vlogs</h1>
            <div className="videoart__videos">
              {videos.map((video, index) => {
                return (
                  <ReactPlayer
                    className='videoart__video'
                    url={video.url}
                    controls="true"
                    pip="true"
                  />
                )
              })}

            </div>
          </Col>
        </Row>
        <Row center="lg">
          <Col lg={12}>
            <div className="gallery">
              <Row center="lg">
                <Col lg={9}>
                  <h2>Art</h2>
                  <Row style={{ marginBottom: '0' }}>
                    <div className="gallery__wrapper">
                      {images.map((image, index) => {
                        const alt = image.altText;
                        const src = image.src;
                        return (
                          <Col lg={4} className="gallery__image-wrapper">
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
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}