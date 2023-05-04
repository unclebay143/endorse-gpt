import React from "react";

const ThemeWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <section className='bg-white dark:bg-slate-900'>{children}</section>;
};

export default ThemeWrapper;
