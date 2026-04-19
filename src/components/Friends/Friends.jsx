import React, { use, useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';
import { RingLoader } from 'react-spinners';

// const friendsPromise = fetch("/data.json")
//   .then((res) => res.json());

const Friends = () => {

  // const friends = use(friendsPromise);
  // console.log(friends, "friends");
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const friendsData = async () => {
      const res = await fetch("/data.json")
      const data = await res.json();
      console.log(data, "data");
      setFriends(data);
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1000)
    };
    friendsData();
  }, [])

  console.log(friends, "friends");
  console.log(loading, "loading");

  return (
    <div className='container mx-auto mb-6'>
      <h2 className='font-bold text-2xl'>Your Friends</h2>

      Total Friends:  {friends.length} 
      <div className='grid grid-cols-4 gap-6'>
        {loading ? (
          <div className='flex justify-center items-center col-span-4 min-h-40'>
            <RingLoader color='#244D3F'/>
          </div>
          ) :
          (friends.map((friend, ind) => <FriendsCard
            key={ind} friend={friend}>
            </FriendsCard>))
          }
      </div>
    </div>
  );
};

export default Friends;