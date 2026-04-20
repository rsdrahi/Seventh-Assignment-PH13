import FriendsCard from './FriendsCard';
import { RingLoader } from 'react-spinners';
import UseData from '../../hooks/UseData';

// const friendsPromise = fetch("/data.json")
//   .then((res) => res.json());

const Friends = () => {

  // const friends = use(friendsPromise);
  // console.log(friends, "friends");
  const { friends, loading } = UseData();

  return (
    <div className='container mx-auto mb-6'>
      <h2 className='font-bold text-2xl'>Your Friends</h2>

      {/* Total Friends:  {friends.length}  */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
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