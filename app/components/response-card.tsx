import React, { ReactElement } from "react";
import CardMenu from "./response-menu";

const ResponseCard = ({
  text,
  children,
}: {
  text: string;
  children?: ReactElement;
}) => {
  return (
    <article className='flex flex-col justify-between p-6 border rounded-lg shadow dark:border-gray-400 '>
      <p className='mb-2 text-lg font-medium text-gray-800 transition dark:text-gray-300'>
        {children}
      </p>
      <div className='flex justify-end'>
        <CardMenu text={text} />
      </div>
    </article>
  );
};

export default ResponseCard;
