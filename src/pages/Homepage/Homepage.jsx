import React from 'react';
import Banner from '../../components/Banner/Banner';
import BannerCard from '../../components/Banner/BannerCard';
import Friends from '../../components/Friends/Friends';

const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <div className="divider container mx-auto my-5 opacity-40"></div>
      <Friends></Friends>
    </>
  );
};

export default Homepage;