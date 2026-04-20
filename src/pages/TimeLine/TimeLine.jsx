import React, { useContext } from 'react';
import { CallButtonContext } from '../../context/ButtonProvider';
import TimelineCard from './TimelineCard';

const TimeLine = () => {

  const { buttonContext, setButtonContext} = useContext(CallButtonContext);
  console.log(buttonContext, "contextData");

  return (

    <div className='container m-auto'>
      <h3 className='font-bold text-3xl mt-8'>Timeline</h3>
      <div className='mt-6 mb-6 p-3'>
        {buttonContext.length === 0 ? 
          <div
            className='flex justify-center text-5xl font-bold shadow p-16 rounded-md bg-white'>Timeline is Empty
          </div> :
        buttonContext.map((button, index) =>
          <TimelineCard button={button} key={index}></TimelineCard>)
       }
      </div>
    </div>
  );
};

export default TimeLine;