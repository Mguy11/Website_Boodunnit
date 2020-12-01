import React from 'react';

import AvailibilityBlock from '../components/availibility_block';
import Header from '../components/header';
import PlatformButton from '../webparts/platform_button';

const VideosArt = () => {
  return (
    <div className="Test">
      <Header />
      <AvailibilityBlock />
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <br />
      <div className="test__div">
        <PlatformButton
          website='https://store.steampowered.com'
          image='../images/icons/steam.png'
          altText="steam-icon"
        />
      </div>
    </div>
  );
}

export default VideosArt;
