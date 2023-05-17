import React from 'react';
import {TableData} from './Table.comp';
import moment from 'moment';
import TableAction from './TableAction.comp';
import {TbEdit} from 'react-icons/tb';
import {IoTrashBin} from 'react-icons/io5';

const btn_color = '#338BA8';

const Tablerow: React.FC<{data: TableData}> = ({
  data: {ModifietAt, Name, Owner, Type, file, link, preview_image, id}
}) => {
  return (
    <tr>
      <th>
        <label>
          <input
            type='checkbox'
            className='checkbox checkbox-sm'
          />
        </label>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img
                src={preview_image || file || link}
                alt={Name}
              />
            </div>
          </div>
          <div>
            <div className='font-bold'>{Name}</div>
            <div className='text-sm opacity-50'>{link}</div>
          </div>
        </div>
      </td>
      <td>
        <div className='avatar'>
          <div className='mask mask-circle w-8 h-8'>
            <img
              src={Owner}
              alt={Name}
            />
          </div>
        </div>
      </td>
      <td className='text-light_blue'>Label 1</td>
      <td className='text-light_blue'>{Type}</td>
      <td className='text-light_blue'>{moment(ModifietAt).format('ll')}</td>
      <td className='space-x-4'>
        <button>
          <TbEdit
            size={20}
            color={btn_color}
          />
        </button>
        <button>
          <IoTrashBin
            size={20}
            color={btn_color}
          />
        </button>
      </td>
    </tr>
  );
};

export default Tablerow;
