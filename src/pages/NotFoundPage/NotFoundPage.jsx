import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='text-center space-y-3 mt-24 p-18 container m-auto bg-white shadow rounded-lg'>
      <h2 className='text-2xl font-bold'>404- The Page is Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to={"/"} className='btn btn-success text-black'>Bact To Home</Link>
    </div>
  );
};

export default NotFoundPage;