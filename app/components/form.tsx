import React, { useState } from "react";
import ShowMoreFormHandler from "./show-more-field";
import CounterBadge from "./counter-badge";
import { AnimateAppearanceWrapper } from "./animate-appearance-wrapper";
import Button from "./button";

function Form({ handleSubmit }: { handleSubmit: Function }) {
  const [showAllForm, setShowAllForm] = useState<boolean>(false);

  return (
    <section
      className={`px-5 py-4 mx-auto ${
        showAllForm ? "mb-36" : "mb-10"
      } sm:max-w-lg h-[20rem]`}
    >
      <section className='flex flex-col items-center justify-center w-full'>
        <AnimateAppearanceWrapper>
          <div
            className={`${
              showAllForm ? "h-[20rem]" : "h-[14rem]"
            } overflow-y-scroll scrollbar-hide px-2 transition`}
          >
            <div className='w-full mb-5'>
              <label
                htmlFor='name'
                className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
              >
                <div>
                  <CounterBadge count='1' />
                </div>
                <div>
                  Full name{" "}
                  <span className='text-slate-500'>
                    (of the person being recommended)
                  </span>
                </div>
              </label>
              <input
                type='text'
                placeholder='Guillermo Rauch'
                id='name'
                className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
              />
            </div>
            <div className='w-full mb-5'>
              <label
                htmlFor='role'
                className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
              >
                <div>
                  <CounterBadge count='2' className='' />
                </div>
                <div>
                  Position or job title{" "}
                  <span className='text-slate-500'>
                    (of the person being recommended)
                  </span>
                </div>
              </label>
              <input
                type='text'
                placeholder='e.g. Marketing Manager, Software Developer'
                id='role'
                className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
              />
            </div>

            {showAllForm ? (
              <AnimateAppearanceWrapper>
                <>
                  <div className='w-full mb-5'>
                    <label
                      htmlFor='relationship'
                      className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
                    >
                      <CounterBadge count='3' />
                      <div>
                        Relationship to the recommended person{" "}
                        <span className='text-slate-500'>(optional)</span>
                      </div>
                    </label>
                    <input
                      type='text'
                      placeholder='e.g. colleague, manager, mentor'
                      id='relationship'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
                    />
                  </div>
                  <div className='w-full mb-5'>
                    <label
                      htmlFor='anecdotes'
                      className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
                    >
                      <CounterBadge count='4' className='mb-5' />
                      <div>
                        Anecdotes of the person's contributions or
                        accomplishments in the workplace{" "}
                        <span className='text-slate-500'>(optional)</span>
                      </div>
                    </label>
                    <textarea
                      placeholder='e.g. led a successful project, exceeded sales targets, improved team morale'
                      id='anecdotes'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
                    />
                  </div>
                  <div className='w-full mb-5'>
                    <label
                      htmlFor='skills'
                      className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
                    >
                      <CounterBadge count='5' />
                      <div>
                        Key strengths and skills that stand out{" "}
                        <span className='text-slate-500'>(optional)</span>
                      </div>
                    </label>
                    <input
                      type='text'
                      placeholder='e.g. exceptional communication skills, strong attention to detail, strategic thinking'
                      id='skills'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
                    />
                  </div>
                  <div className='w-full mb-5'>
                    <label
                      htmlFor='impact'
                      className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
                    >
                      <CounterBadge count='6' className='mb-5' />
                      <div>
                        How their work impacted the team/organization as a whole{" "}
                        <span className='text-slate-500'>(optional)</span>
                      </div>
                    </label>
                    <input
                      type='text'
                      placeholder='e.g. increased productivity, improved customer satisfaction, streamlined processes'
                      id='impact'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
                    />
                  </div>
                  <div className='w-full mb-5'>
                    <label
                      htmlFor='recommend'
                      className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
                    >
                      <CounterBadge count='7' className='mb-5' />
                      <div>
                        Why would you recommend this person to others?{" "}
                        <span className='text-slate-500'>(optional)</span>
                      </div>
                    </label>
                    <input
                      type='text'
                      placeholder='e.g. reliable, knowledgeable, a great team player'
                      id='recommend'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
                    />
                  </div>
                </>
              </AnimateAppearanceWrapper>
            ) : null}
          </div>

          <ShowMoreFormHandler
            showAllForm={showAllForm}
            setShowAllForm={setShowAllForm}
          />

          <Button handleSubmit={handleSubmit} />
        </AnimateAppearanceWrapper>
      </section>
    </section>
  );
}

export default Form;
