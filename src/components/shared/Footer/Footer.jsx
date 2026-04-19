import React from 'react';
import InstagramImage from '../../../assets/instagram.png'
import FacebookImage from '../../../assets/facebook.png'
import TwitterImage from '../../../assets/twitter.png'

const Footer = () => {
  return (
    <div className='text-center bg-[#244D3F] text-white p-12 space-y-6'>
      <h2 className='text-6xl font-bold'>KeenKeeper</h2>
      <p className='opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <p>Social Links</p>
      <div className='flex gap-2 items-center justify-center'>
        <img src={InstagramImage} alt="InstagramImage" />
        <img src={FacebookImage} alt="FacebookImage" />
        <img src={TwitterImage} alt="TwitterImage" />
      </div>
      <hr className='my-8 opacity-20' />
      <div className='flex justify-between opacity-70'>
        <div><p>© 2026 KeenKeeper. All rights reserved.</p></div>
        <div className='flex justify-between gap-4'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;