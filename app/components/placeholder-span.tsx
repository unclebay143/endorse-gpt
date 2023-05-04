import React from "react";

const PlaceholderSpan = ({
  template,
  name,
  skills,
  company,
  position,
  handlePlaceholderClick,
}: {
  template: string;
  name: string;
  skills: string;
  company: string;
  position: string;
  handlePlaceholderClick: Function;
}) => {
  return (
    <>
      {template.split(" ").map((word, index) => {
        if (word === name || word === `${name}.`) {
          return (
            <span
              key={index}
              // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-blue-800 ring-1 ring-inset ring-blue-500/10'
              className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-slate-500 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
              onClick={() => handlePlaceholderClick("name")}
            >
              {name}
            </span>
          );
        } else if (word === skills || word === `${skills}.`) {
          return (
            <span
              key={index}
              // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-blue-800 ring-1 ring-inset ring-blue-500/10'
              className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-slate-500 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
              onClick={() => handlePlaceholderClick("skills")}
            >
              {skills}
            </span>
          );
        } else if (word === company || word === `${company}.`) {
          return (
            <span
              key={index}
              // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-blue-800 ring-1 ring-inset ring-blue-500/10'
              className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-slate-500 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
              onClick={() => handlePlaceholderClick("company")}
            >
              {company}
            </span>
          );
        } else if (word === position || word === `${position}.`) {
          return (
            <span
              key={index}
              // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-blue-800 ring-1 ring-inset ring-blue-500/10'
              className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-slate-500 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
              onClick={() => handlePlaceholderClick("position")}
            >
              {position}
            </span>
          );
        } else if (word.match(/\[(.*?)\]/g)) {
          return (
            <span
              key={index}
              // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-blue-800 ring-1 ring-inset ring-blue-500/10'
              className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-slate-500 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
            >
              {word}
            </span>
          );
        } else {
          return <span key={index}>{word} </span>;
        }
      })}
    </>
  );
};

export default PlaceholderSpan;
