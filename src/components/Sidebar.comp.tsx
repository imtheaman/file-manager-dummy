import React from 'react';

export default function Sidebar() {
  return (
    <ul className='menu w-80 p-2  bg-base-100 text-black drop-shadow-lg'>
      <img
        src='./logo.png'
        className='object-cover p-2 bg-white'
      />
      <hr className='py-2' />
      <li>
        <button>
          <img
            src='./file.png'
            className='object-cover'
          />
          File Manager
        </button>
      </li>
    </ul>
  );
}
