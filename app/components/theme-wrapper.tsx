import React, { ReactElement } from "react";

const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  return <section className='bg-white dark:bg-slate-900'>{children}</section>;
};

export default ThemeWrapper;
