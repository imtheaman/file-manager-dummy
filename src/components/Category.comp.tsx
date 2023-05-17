import {useQuery} from '@tanstack/react-query';
import React from 'react';
import CategoryCol from './CategoryCol.comp';
import {GrSettingsOption} from 'react-icons/gr';

export type Label = {
  id: number;
  Name: string;
};
export interface CategoryData {
  Name: string;
  id: number;
  Labels: Label[];
}

function Category() {
  const {isLoading, isError, data} = useQuery<CategoryData[]>({
    queryKey: ['category'],
    queryFn: async () => {
      const data = await fetch(
        'https://646312614dca1a661353d0ee.mockapi.io/api/Category'
      );
      return data.json();
    }
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);

  return (
    <div className='w-1/4 px-10'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='uppercase text-lg font-semibold'>categories</h2>
        <GrSettingsOption />
      </div>
      {data.map((obj) => (
        <CategoryCol
          key={obj.id}
          data={obj}
        />
      ))}
    </div>
  );
}

export default Category;
