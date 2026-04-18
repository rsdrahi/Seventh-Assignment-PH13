import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (

    <nav className='shadow'>
      <div className='flex justify-between container mx-auto p-3'>
        <h2 className='text-2xl'>KeenKeeper</h2>
         <ul className='flex gap-2'>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Timeline</Link>
          </li>
          <li>
            <Link>Stats</Link>
          </li>
         </ul>
      </div>
     </nav>
  );
};

export default Navbar;