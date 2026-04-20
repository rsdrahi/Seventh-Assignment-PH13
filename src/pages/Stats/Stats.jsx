import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CallButtonContext } from '../../context/ButtonProvider';
import UseData from '../../hooks/UseData';

const Stats = () => {

  const { buttonContext } = useContext(CallButtonContext);
  const forCall = buttonContext.filter(button => button.type === 'call').length
  const forText = buttonContext.filter(button => button.type === 'text').length
  const forVideo = buttonContext.filter(button => button.type === 'video').length
  const { friends, loading } = UseData();
  console.log(friends, 'friends')
  const blankData = friends.length - buttonContext.length;
  console.log(blankData, "blankData")

  const data = [
  { name: 'Call', value: forCall, fill: '#2C4933' },
  { name: 'Text', value: forText, fill: '#649C65' },
  { name: 'Video call', value: forVideo, fill: '#7518BA' },
];

  return (
    <>
      <div className='max-w-6xl m-auto mt-12 font-bold text-5xl'>Friendship Analytics</div>
    <div className='my-8 shadow bg-white max-w-6xl mx-auto p-6'>
      <p className='text-xl font-medium text-green-900'>By Interaction Type</p>
        <PieChart style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '80vh', 
          aspectRatio: 1,
          margin: 'auto',
        }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
    </PieChart>
      </div>
      </>
  );
};

export default Stats;