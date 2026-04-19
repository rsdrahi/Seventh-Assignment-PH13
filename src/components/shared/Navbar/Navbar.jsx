import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (

    <nav className='shadow'>
      <div className='flex justify-between container mx-auto p-3'>
        <h2 className='text-2xl font-bold'>
          <span className='text-[#1F2937]'>Keen</span>
          <span className='text-[#244D3F]'>Keeper</span>
        </h2>
         <ul className='flex gap-2'>
          <li>
            <NavLink to={"/"} className={({isActive})=> `${isActive ? 'bg-[#244D3F] text-white': 'text-gray-500'} flex items-center gap-1 font-medium p-2 rounded-md`}>
             <IoHomeOutline></IoHomeOutline> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/timeline"} className={({isActive})=> `${isActive ? 'bg-[#244D3F] text-white': 'text-gray-500'} flex items-center gap-1 font-medium p-2 rounded-md`}>
             <IoTimeOutline></IoTimeOutline> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to={"/stats"} className={({isActive})=> `${isActive ? 'bg-[#244D3F] text-white': 'text-gray-500'} flex items-center gap-1 font-medium p-2 rounded-md`}>
             <GoGraph></GoGraph> Stats
            </NavLink>
          </li>
         </ul>
      </div>
     </nav>
  );
};

export default Navbar;