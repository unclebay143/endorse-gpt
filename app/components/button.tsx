import React from "react";

const Button = ({ handleSubmit }: { handleSubmit: Function }) => {
  return (
    <button
      onClick={() => handleSubmit()}
      className='flex justify-center gap-1 items-center transition mt-5 text-lg text-white bg-black dark:bg-white dark:text-gray-800 font-bold py-2.5 px-2 w-full rounded-md'
    >
      <span>Generate</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
        />
      </svg>
    </button>
  );
};

export default Button;
