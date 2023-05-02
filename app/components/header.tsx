import React from "react";
import Sparkles from "../shared/icons/sparkles";
import Sun from "../shared/icons/sun";
import Moon from "../shared/icons/moon";

type Props = {};

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
        <div className='flex items-center space-x-2'>
          <Sparkles className='dark:bg-gray-300' />

          <h1 className='text-3xl font-bold transition dark:text-gray-300 text-slate-950'>
            EndorserGPT
          </h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
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
        <h3 className='text-4xl font-bold transition sm:text-5xl dark:text-gray-300 text-slate-900'>
          Generate your polished recommendations in minutes
        </h3>
      </section>
    </>
  );
};

export default Header;
