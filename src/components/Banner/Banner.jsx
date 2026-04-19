import React from 'react';

const Banner = () => {
  return (
    <div className='space-y-6 text-center mt-12'>
      <h2 className='text-5xl font-bold text-[#1F2937]'>
        Friends to keep close in your life
      </h2>
      <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
      </p>
      <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
    </div>
  );
};

export default Banner;