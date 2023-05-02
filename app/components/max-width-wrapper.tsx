import React, { ReactElement } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactElement }) => {
  return <section className='max-w-screen-lg px-4 mx-auto'>{children}</section>;
};

export default MaxWidthWrapper;
