import React, {MouseEventHandler, ReactNode} from 'react';
import {MdCancel} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';

const Modal: React.FC<{
  title: ReactNode;
  handleTrue: MouseEventHandler<HTMLButtonElement>;
  handleFalse: MouseEventHandler<HTMLButtonElement>;
}> = ({title, handleTrue, handleFalse}) => {
  return (
    <div className='absolute top-0 right-5 z-10 bg-white drop-shadow-lg rounded-lg chat-end overflow-hidden'>
      <div className='flex space-x-2 px-3 text-light_blue py-1 text-sm items-center bg-gray-200 border-b border-gray-200'>
        {title}
      </div>
      <div className='flex space-x-6 p-3'>
        <p className='text-light_blue'>Are ya sure?</p>
        <div className='flex justify-between space-x-3 items-center'>
          <button
            onClick={handleTrue}
            className='rounded-full bg-green-500'
          >
            <TiTick
              color='white'
              size={20}
            />
          </button>
          <button
            onClick={handleFalse}
            className='text-red-500'
          >
            <MdCancel size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
