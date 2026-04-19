import React, { use, useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';

// const friendsPromise = fetch("/data.json")
//   .then((res) => res.json());

const Friends = () => {

  // const friends = use(friendsPromise);
  // console.log(friends, "friends");
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friendsData = async () => {
      const res = await fetch("/data.json")
      const data = await res.json();
      console.log(data, "data");
      setFriends(data)
    };
    friendsData();
  }, [])

  console.log(friends, "friends")

  return (
    <div className='container mx-auto mb-6'>
      <h2 className='font-bold text-2xl'>Your Friends</h2>

      Total Friends:  {friends.length} 
      <div className='grid grid-cols-4 gap-6'>
      {
          friends.map((friend, ind) => <FriendsCard
            key={ind} friend={friend}>
            </FriendsCard>)
      }
      </div>
    </div>
  );
};

export default Friends;