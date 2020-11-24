import React from 'react';
import AvailibilityBlock from '../components/availibility_block';
import Header from '../components/header';
import VideoBlock from '../components/video_block';
import TextBlock from '../components/text_block';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="wrap">
        <AvailibilityBlock />
        <VideoBlock />
        <TextBlock />
      </div>
    </div>
  );
}

export default Home;
