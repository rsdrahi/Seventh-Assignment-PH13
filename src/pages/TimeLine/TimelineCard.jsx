import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';

const TimelineCard = ({ button }) => {
  
  const { type, date, friend } = button;

  return (
    <div className=''>
      {
        type === "call" && (
          <div className='flex items-center gap-4 rounded-md mb-3 p-3 shadow bg-white'>
            <FiPhoneCall className='h-6 w-6'></FiPhoneCall>
            <div>
              <h3>
                <span className='font-bold'>Meetup </span>with {`${friend.name}`}</h3>
              <p>{date}</p>
            </div>
          </div>
        )
      }
      {
        type === "text" && (
          <div className='flex items-center gap-4 rounded-md mb-3 p-3 shadow bg-white'>
            <LuMessageSquareMore className='h-6 w-6'></LuMessageSquareMore>
            <div>
              <h3>
                <span className='font-bold'>Text </span>with {`${friend.name}`}</h3>
              <p>{date}</p>
            </div>
          </div>
        )
      }
      {
        type === "video" && (
          <div className='flex items-center gap-4 rounded-md mb-3 p-3 shadow bg-white'>
            <IoVideocamOutline className='h-6 w-6'></IoVideocamOutline>
            <div>
              <h3>
                <span className='font-bold'>Video </span>with {`${friend.name}`}</h3>
              <p>{date}</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default TimelineCard;