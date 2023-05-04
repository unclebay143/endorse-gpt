import React from "react";
import CounterBadge from "./counter-badge";
import { AnimateAppearanceWrapper } from "./animate-appearance-wrapper";
import Button from "./button";

function NoteForm({ handleSubmit }: { handleSubmit: Function }) {
  return (
    <section className='px-5 py-4 mx-auto mb-10 sm:max-w-lg h-[20rem]'>
      <section className='flex flex-col items-center justify-center w-full'>
        <AnimateAppearanceWrapper>
          <div className='w-full mb-5'>
            <label
              htmlFor='anecdotes'
              className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
            >
              <CounterBadge count='1' />
              <div>Write a brief about the person you want to recommend</div>
            </label>
            <textarea
              placeholder='Write a brief summary of the person you are recommending. Include their key strengths, achievements, and why you would recommend them.'
              id='anecdotes'
              className='h-40 w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
              style={{ minHeight: "10rem" }}
            />
          </div>

          <Button handleSubmit={handleSubmit} />
        </AnimateAppearanceWrapper>
      </section>
    </section>
  );
}

export default NoteForm;
