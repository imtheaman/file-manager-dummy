import React from 'react';
import {FaPlus} from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar  bg-base-100 text-gray-700 border-b-2 py-4 px-10'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>File Manager</a>
      </div>
      <div className='flex-none'>
        <button className='btn btn-primary space-x-3'>
          <FaPlus />
          <p>Upload</p>
        </button>
      </div>
    </div>
  );
}
