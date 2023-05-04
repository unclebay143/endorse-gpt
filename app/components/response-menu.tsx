"use client";
import { useState } from "react";
import Clipboard from "../shared/icons/clipboard";
import Check from "../shared/icons/check";
import Share from "../shared/icons/share";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const CardMenu = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopied = () => {
    setCopied(true);
    nprogress.start();

    window.navigator.clipboard.writeText(text).then(() => {
      nprogress.done();
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  return (
    <section className='flex items-center gap-3 right-1'>
      {copied ? (
        <button className='flex items-center border rounded-full p-2 px-4 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 gap-2'>
          <Check className='dark:text-gray-300 transition  w-4 h-4' />
          <span className='text-sm'>Copied</span>
        </button>
      ) : (
        <button
          onClick={() => handleCopied()}
          className='dark:text-gray-300 flex transition items-center border rounded-full p-2 px-4 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 gap-2 dark:hover:text-black'
        >
          <Clipboard className='transition w-4 h-4' />
          <span className='text-sm'>Copy</span>
        </button>
      )}
      <button className='dark:text-gray-300 flex items-center border rounded-full p-2 px-4 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 gap-2 dark:hover:text-black'>
        <Share className='transition w-4 h-4' />
        <span className='text-sm'>Share</span>
      </button>
    </section>
  );
};

export default CardMenu;
