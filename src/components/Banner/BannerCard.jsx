import React from 'react';

const BannerCard = () => {
  return (
    <div className='grid grid-cols-4 mt-12 container mx-auto gap-2'>
      <div className='shadow-lg text-center py-8 rounded-md bg-white'>
        <h3 className='text-[#244D3F] font-bold text-2xl space-y-2'>
          10
        </h3>
        <p className='text-[#64748B]'>Total Friends</p>
      </div>
      <div className='shadow-lg text-center py-8 rounded-md bg-white'>
        <h3 className='text-[#244D3F] font-bold text-2xl space-y-2'>
          3
        </h3>
        <p className='text-[#64748B]'>On Track</p>
      </div>
      <div className='shadow-lg text-center py-8 rounded-md bg-white'>
        <h3 className='text-[#244D3F] font-bold text-2xl space-y-2'>
          6
        </h3>
        <p className='text-[#64748B]'>Need Attention</p>
      </div>
      <div className='shadow-lg text-center py-8 rounded-md bg-white'>
        <h3 className='text-[#244D3F] font-bold text-2xl space-y-2'>
          12
        </h3>
        <p className='text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  );
};

export default BannerCard;