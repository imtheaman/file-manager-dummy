import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {FaPlus} from 'react-icons/fa';

export default function Navbar() {
  const queryClient = useQueryClient();
  const uploadMutation = useMutation({
    mutationFn: async () => {
      const data = await fetch(
        'https://646312614dca1a661353d0ee.mockapi.io/api/Files',
        {
          method: 'POST'
        }
      );
      return data.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['table']);
    }
  });
  return (
    <div className='navbar  bg-base-100 text-gray-700 border-b border-light_gray py-4 px-10'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>File Manager</a>
      </div>
      <div className='flex-none'>
        <button
          onClick={() => uploadMutation.mutate()}
          className='btn btn-primary space-x-3'
        >
          <FaPlus />
          <p>Upload</p>
        </button>
      </div>
    </div>
  );
}
