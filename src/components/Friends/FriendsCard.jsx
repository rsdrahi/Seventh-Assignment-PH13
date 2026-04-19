import React from 'react';

const FriendsCard = ({ friend }) => {

  const { name, picture, status, tags, days_since_contact } = friend
  const statusFormat =
    status === "overdue" ? "bg-red-500" : status === "almost due" ? "bg-yellow-500" : "bg-green-500";
  
  return (
    <div className='shadow rounded-xl text-center space-y-2 p-4 bg-white mt-6'>
      <img src={picture} alt="" className='rounded-full mx-auto' />
      <h2 className='font-bold text-2xl'>{name}</h2>
      <p className='text-[#64748B] text-sm'>{days_since_contact}d ago</p>
      <div className='flex justify-center gap-2 items-center'>
        {
          tags.map((tag, ind) => (<span key={ind}
            className='bg-green-200 rounded-full px-2 py-1 text-[#244D3F]'>
            {tag}</span>))
        }
      </div>
      <div className='flex justify-center text-white'>
         <p className={`${statusFormat} rounded-full py-1 w-24`}>
        {status}
      </p>
     </div>
    </div>
  );
};

export default FriendsCard;