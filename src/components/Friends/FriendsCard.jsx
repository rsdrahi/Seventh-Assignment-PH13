import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {

  const { name, picture, status, tags, days_since_contact } = friend
  const statusFormat =
    status === "overdue" ? "bg-[#EF4444]" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]";
  
  return (
    <Link to={`/cardDetails/${friend.id}`} className='shadow rounded-xl text-center space-y-2 p-4 bg-white mt-6'>
      <img src={picture} alt="" className='rounded-full mx-auto' />
      <h2 className='font-bold text-2xl'>{name}</h2>
      <p className='text-[#64748B] text-xl'>{days_since_contact}d ago</p>
      <div className='flex justify-center gap-2 items-center'>
        {
          tags.map((tag, ind) => (<span key={ind}
            className='bg-green-200 rounded-full px-3 py-2 text-[#244D3F] font-semibold'>
            {tag.toUpperCase()}</span>))
        }
      </div>
      <div className='flex justify-center text-white'>
         <p className={`${statusFormat} rounded-full py-1 w-24 capitalize`}>
        {status.toLowerCase()}
      </p>
     </div>
    </Link>
  );
};

export default FriendsCard;