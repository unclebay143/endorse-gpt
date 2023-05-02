import React from "react";

const ShowMoreFormHandler = ({
  showAllForm,
  setShowAllForm,
}: {
  showAllForm: boolean;
  setShowAllForm: Function;
}) => {
  return (
    <section className='flex items-center justify-center mt-2'>
      <button
        type='button'
        className='flex items-center justify-center'
        onClick={() => setShowAllForm(!showAllForm)}
      >
        {showAllForm ? (
          <span className='mr-1 text-sm dark:text-gray-300'>Scroll down</span>
        ) : (
          <span className='mr-1 text-sm dark:text-gray-300'>Expand form</span>
        )}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5 dark:text-gray-300'
        >
          {showAllForm ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
            />
          )}
        </svg>
      </button>
    </section>
  );
};

export default ShowMoreFormHandler;
