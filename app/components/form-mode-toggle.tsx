import React from "react";
import Toggle from "./toggle";

const FormModeToggle = ({
  handleFormModeChange,
  mode,
}: {
  handleFormModeChange: Function;
  mode: boolean;
}) => {
  return (
    <section className='flex justify-center mt-10 mb-5'>
      <div>
        <label
          htmlFor='toggle'
          className='text-xs text-gray-700 dark:text-gray-300'
        >
          Fill form
        </label>
        <Toggle checked={mode} handleOnChange={handleFormModeChange} />
        <label
          htmlFor='toggle'
          className='text-xs text-gray-700 dark:text-gray-300'
        >
          Write brief
        </label>
      </div>
    </section>
  );
};

export default FormModeToggle;
