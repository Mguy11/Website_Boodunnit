import React from 'react';

import AvailibilityBlock from '../components/availibility_block';
import Header from '../components/header';
import VideoBlock from '../components/video_block';
import TextBlock from '../components/text_block';
import TextImageBlock from '../components/text-image_block';
import QuoteBlock from '../components/quote_block';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Header />
      <div className="wrap">
        <AvailibilityBlock />
        <VideoBlock />
        <TextBlock />
        <TextImageBlock />
        <QuoteBlock />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
