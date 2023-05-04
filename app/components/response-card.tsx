import React from "react";
import CardMenu from "./response-menu";

const ResponseCard = ({
  text,
  children,
  index,
}: {
  text: string;
  index: number;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <article className='p-6 border rounded-lg shadow dark:border-gray-400 '>
      <h3 className='mb-3 inline-flex items-center py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 transition'>
        Template {index + 1}
      </h3>
      <section className='flex flex-col justify-between'>
        <p className='mb-2 leading-9 text-lg font-medium text-gray-800 transition dark:text-gray-300'>
          {children}
        </p>
        <div className='flex justify-end'>
          <CardMenu text={text} />
        </div>
      </section>
    </article>
  );
};

export default ResponseCard;
