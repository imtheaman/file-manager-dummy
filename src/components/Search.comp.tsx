import React from 'react';
interface PropsType {
  placeholder: string;
  className?: string;
}
const Search: React.FC<PropsType> = ({placeholder, className, ...others}) => {
  return (
    <input
      {...others}
      type='text'
      placeholder={placeholder}
      className={`input input-bordered w-full max-w-xs ${className}`}
    />
  );
};
export default Search;
