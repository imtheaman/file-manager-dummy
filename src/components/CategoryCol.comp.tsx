import React from 'react';
import {CategoryData} from './Category.comp';

const CategoryCol: React.FC<{data: CategoryData}> = ({
  data: {Labels, Name, id}
}) => {
  return (
    <div>
      <h3>{Name}</h3>
      {Labels.map((label) => (
        <div
          className='flex space-x-3 m-4'
          key={label.id}
        >
          <input
            type='checkbox'
            className='checkbox checkbox-sm'
          />
          <span className='label-text'>{label.Name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryCol;
