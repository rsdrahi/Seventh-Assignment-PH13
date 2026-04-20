import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import UseData from '../../hooks/UseData';
import CardDetailContent from './CardDetailContent';
import { RingLoader } from 'react-spinners';
import { FiPhoneCall } from 'react-icons/fi';
import { LuArchive, LuMessageSquareMore } from 'react-icons/lu';
import { IoVideocamOutline } from 'react-icons/io5';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { CallButtonContext } from '../../context/ButtonProvider';
import { toast } from 'react-toastify';

const CardDetails = () => {

  const { id } = useParams();
  console.log(id, "id");
  const { friends, loading } = UseData();
  const expectedFriend = friends.find((friend) => friend.id == id);
  // const [buttonContext, setButtonContext] = useState([]);
  const { buttonContext, setButtonContext} = useContext(CallButtonContext);
  console.log(friends, loading, "friends", "loading");
  console.log(expectedFriend, "expectedFriend");

  if (loading) {
    return (
      <div className='flex justify-center items-center col-span-4 min-h-40'>
      <RingLoader color='#244D3F'/>
   </div>
    )
  }

  const handleButtonContext = (type) => {

    const newData = {
     type: type,
     date: Date(),
     friend:  expectedFriend
    }
    setButtonContext([...buttonContext, newData]);
    toast.success(
      type === "call" ? `${expectedFriend.name} is called` :
        type === "text" ? `${expectedFriend.name} is text` :
          `${expectedFriend.name} is video called` 
    )
  }

  const { name, picture, status, tags, days_since_contact, email, bio, next_due_date, goal } = expectedFriend 
  
  const statusFormat =
    status === "overdue" ? "bg-[#EF4444]" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]";

  return (
    <div className='container mx-auto mt-12 mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* left side */}
        <div className='col-span-1 shadow rounded-lg p-4 space-y-3 bg-white flex flex-col items-center text-center'>
          <img src={picture} alt={picture}  className='h-16 w-16 rounded-full'/>
          <h2 className='font-bold text-2xl'>{name}</h2>

           <div className=''>
            <p className={`${statusFormat} text-center text-white rounded-full w-20 capitalize`}>
             {status.toLowerCase()}
            </p>
          </div>

          <div className='flex gap-3'>
          {
           tags.map((tag, ind) => (<span key={ind}
            className='bg-green-200 rounded-full text-[#244D3F] px-2'>
            {tag.toUpperCase()}</span>))
          }
          </div>

          <p className='italic font-bold text-gray-500'>"{bio}"</p>
          <p className='text-gray-500 font-medium'>Email: {email}</p>

          <div className='grid grid-cols-1 gap-4 min-w-full'>
            <button className='btn'>
              <RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</button>
            <button className='btn'>
              <LuArchive></LuArchive> Archive</button>
            <button className='btn text-red-500'>
              <RiDeleteBin5Line></RiDeleteBin5Line> Delete</button>
          </div>

        </div>
        {/* right side */}
        <div className='col-span-2 space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='shadow rounded-md text-center p-4 bg-white'>
              <h3 className='text-[#244D3F] font-bold text-2xl'>{days_since_contact}</h3>
              <p className='text-[#64748B] font-medium'>Days Since Contact</p>
            </div>
            <div className='shadow rounded-md text-center p-4 bg-white'>
              <h3 className='text-[#244D3F] font-bold text-2xl'>{goal}</h3>
              <p className='text-[#64748B] font-medium'>Goal (Days)</p>
            </div>
            <div className='shadow rounded-md text-center p-4 bg-white'>
              <h3 className='text-[#244D3F] font-bold text-2xl'>{next_due_date}</h3>
              <p className='text-[#64748B] font-medium'>Next Due</p>
            </div>

          </div>
            <div className='shadow p-6 rounded-md bg-white flex justify-between'>
            <div className='space-y-3'>
               <h3 className='text-xl text-[#244D3F] font-medium'>Relationship Goal</h3>
              <p className='text-[#64748B]'>Connect every
              <span className='font-medium text-black'> 30 days</span></p>
           </div>
            <button className='btn border rounded-lg px-6 py-2'>Edit</button>
          </div>  
          <div className='shadow rounded-md p-6 bg-white'>
            <h3 className='text-[#244D3F] font-medium text-xl'>Quick Check-In</h3>
            <div className='grid grid-cols-3 gap-3 p-6'>
              <button className='border border-gray-200 bg-gray-100 flex flex-col items-center  justify-center rounded-lg py-6 gap-2 cursor-pointer' onClick={() => handleButtonContext('call')}>
                <FiPhoneCall className='h-8 w-8'></FiPhoneCall>
                Call</button>
              <button className='border border-gray-200 bg-gray-100 flex flex-col items-center justify-center rounded-lg py-6 gap-2 cursor-pointer'  onClick={() => handleButtonContext('text')}>
                <LuMessageSquareMore className='h-8 w-8'></LuMessageSquareMore>
                Text</button>
              <button className='border border-gray-200 bg-gray-100 flex flex-col items-center justify-center rounded-lg gap-2 py-6 cursor-pointer' onClick={() => handleButtonContext('video')}>
                <IoVideocamOutline className='h-8 w-8'></IoVideocamOutline>
                Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;