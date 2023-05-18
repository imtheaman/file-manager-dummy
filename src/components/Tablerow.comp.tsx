import React, {useState} from 'react';
import {TableData} from './Table.comp';
import moment from 'moment';
import {TbEdit} from 'react-icons/tb';
import {IoTrashBin} from 'react-icons/io5';
import Modal from './Modal.comp';

const btn_color = '#338BA8';

const Tablerow: React.FC<{data: TableData}> = ({
  data: {ModifietAt, Name, Owner, Type, file, link, preview_image, id}
}) => {
  const [showAction, setShowAction] = useState<boolean>(false);
  const actionHandler = () => {
    console.log('deleted');
    setShowAction(false);
  };
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
      <td className='relative space-x-4'>
        {showAction ? (
          <Modal
            title={
              <>
                <IoTrashBin />
                <p>Remove</p>
              </>
            }
            handleFalse={() => setShowAction(false)}
            handleTrue={actionHandler}
          />
        ) : null}
        <button onClick={() => {}}>
          <TbEdit
            size={20}
            color={btn_color}
          />
        </button>
        <button onClick={() => setShowAction(true)}>
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
