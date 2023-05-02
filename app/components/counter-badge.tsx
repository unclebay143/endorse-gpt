import React from "react";

const CounterBadge = ({
  count,
  className,
}: {
  count: number | string;
  className?: string;
}) => {
  return (
    <div>
      <div
        className={`transition flex items-center justify-center p-1 text-center bg-black dark:bg-gray-300 rounded-full w-7 h-7 ${className}`}
      >
        <span className='text-gray-300 transition dark:text-gray-700'>
          {count}
        </span>
      </div>
    </div>
  );
};

export default CounterBadge;
