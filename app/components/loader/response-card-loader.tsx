import React from "react";
import CardMenuLoader from "./response-menu-loader";

const ResponseCardLoader = ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <article
              key={index}
              className='my-10 flex flex-col justify-between p-6 border rounded-lg shadow dark:border-gray-400 '
            >
              <p className='w-9/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
              <div className='flex gap-2'>
                <p className='w-2/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
                <p className='w-9/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
              </div>
              <p className='w-12/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
              <div className='flex gap-2'>
                <p className='w-2/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
                <p className='w-9/12 rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
              </div>
              <p className='w-full rounded-full h-6 bg-gray-300 dark:bg-gray-600 animate-pulse mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'></p>
              <div className='flex justify-end'>
                <CardMenuLoader />
              </div>
            </article>
          );
        })}
    </>
  );
};

export default ResponseCardLoader;
