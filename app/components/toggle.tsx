import React from "react";

//https://tailwindcomponents.com/component/toggle-switch

const Toggle = ({
  checked,
  handleOnChange,
}: {
  checked: boolean;
  handleOnChange: Function;
}) => {
  return (
    <div className='relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in'>
      <input
        onChange={(e) => handleOnChange(e.target.checked)}
        type='checkbox'
        name='toggle'
        id='toggle'
        checked={checked}
        className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
      />
      <label
        htmlFor='toggle'
        className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
      />
    </div>
  );
};

export default Toggle;
