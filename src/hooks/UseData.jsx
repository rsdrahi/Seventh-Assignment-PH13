import React, { useEffect, useState } from 'react';

const UseData = () => {

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
      }, 500)
    };
    friendsData();
  }, [])

  console.log(friends, "friends");
  console.log(loading, "loading");

  return { friends, loading }
};

export default UseData;