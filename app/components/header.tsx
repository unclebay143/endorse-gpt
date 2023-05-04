import React from "react";
import Sparkles, { WhiteSparkles } from "../shared/icons/sparkles";
import Sun from "../shared/icons/sun";
import Moon from "../shared/icons/moon";
import Link from "next/link";

// className =
//   "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500";

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: Function;
}) => {
  return (
    <>
      <header className='flex items-center justify-between py-4 border-b'>
        <Link href='/' className='flex items-center space-x-2'>
          <div>
            <Sparkles className='inline-block w-8 h-8 dark:hidden transition' />
            <WhiteSparkles className='hidden w-8 h-8 dark:inline-block transition' />
          </div>
          <h1 className='text-3xl  font-bold transition dark:text-gray-300 text-slate-950'>
            EndorseGPT.com
          </h1>
        </Link>
        <button
          onClick={() => {
            localStorage.setItem("isDarkMode", JSON.stringify(!darkMode));
            setDarkMode(!darkMode);
          }}
          className={`${darkMode ? "text-gray-300" : ""} transition`}
        >
          {darkMode ? (
            <Sun className={"w-7 h-7 transition"} />
          ) : (
            <Moon className={"w-7 h-7 transition"} />
          )}
        </button>
      </header>

      <section className='mt-20 text-center max-w-[708px] mx-auto'>
        <h3 className='text-4xl font-bold transition sm:text-6xl dark:text-gray-300 text-slate-900'>
          Generate your polished recommendations in{" "}
          <div>
            <span className='bg-blue-300 text-blue-600 px-4 mt-1 inline-block emphasis'>
              minutes
            </span>
          </div>
        </h3>
      </section>
    </>
  );
};

export default Header;
