import {useQuery} from '@tanstack/react-query';
import React from 'react';
import Tablerow from './Tablerow.comp';

export interface TableData {
  Name: string;
  Owner: string;
  Type: string;
  file: string;
  id: number;
  link: string;
  preview_image: string;
  ModifietAt: string;
}

const Table: React.FC = () => {
  const {isLoading, isError, data} = useQuery<TableData[]>({
    queryKey: ['table'],
    queryFn: async () => {
      const data = await fetch(
        'https://646312614dca1a661353d0ee.mockapi.io/api/Files'
      );
      return data.json();
    }
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);

  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full drop-shadow-md'>
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type='checkbox'
                  className='checkbox checkbox-xs'
                />
              </label>
            </th>
            <th>Name</th>
            <th>Owner</th>
            <th>Labels</th>
            <th>Type</th>
            <th>Modified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => (
            <Tablerow
              key={obj.id}
              data={obj}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
