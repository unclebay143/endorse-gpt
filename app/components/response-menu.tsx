"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Clipboard from "../shared/icons/clipboard";
import Check from "../shared/icons/check";
import Share from "../shared/icons/share";

const CardMenu = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopied = () => {
    setCopied(true);
    window.navigator.clipboard.writeText(text).then(() => {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  return (
    <section className='flex items-center gap-3 right-1'>
      <button onClick={() => handleCopied()} className='transition'>
        {copied ? (
          <Check className='dark:text-gray-300 transition' />
        ) : (
          <Clipboard className='dark:text-gray-300 transition' />
        )}
      </button>
      <button>
        <Share className='dark:text-gray-300' />
      </button>
    </section>
  );
};

export default CardMenu;
