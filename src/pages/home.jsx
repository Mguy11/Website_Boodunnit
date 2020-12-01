import React from 'react';
import AvailibilityBlock from '../components/availibility_block';
import Header from '../components/header';
import VideoBlock from '../components/video_block';
import TextBlock from '../components/text_block';
import TextImageBlock from '../components/text-image_block';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="wrap">
        <AvailibilityBlock />
        <VideoBlock />
        <TextBlock />
        <TextImageBlock />
      </div>
    </div>
  );
}

export default Home;
