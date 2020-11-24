import React from 'react';
import AvailibilityBlock from '../components/availibility_block';
import Header from '../components/header';
import VideoBlock from '../components/video_block';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="wrap">
        <AvailibilityBlock />
        <VideoBlock />
      </div>
    </div>
  );
}

export default Home;
