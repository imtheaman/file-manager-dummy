import React from 'react';

export default function Sidebar() {
  return (
    <ul className='menu w-80 px-4 bg-base-100 text-black drop-shadow-lg'>
      <img
        src='./logo.png'
        className='object-cover border-b border-light_gray p-2 mb-4 bg-white'
      />
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
