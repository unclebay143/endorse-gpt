export const NameField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <>
      <div className='w-full mb-5'>
        <label
          htmlFor='name'
          className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
        >
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
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
        />
      </div>
    </>
  );
};

export const CompanyField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <>
      <div className='w-full mb-5'>
        <label
          htmlFor='company'
          className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
        >
          <div>Company you both worked at together</div>
        </label>
        <input
          type='text'
          placeholder='e.g. Hashnode'
          id='company'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
        />
      </div>
    </>
  );
};

export const SkillsField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <>
      <div className='w-full mb-5'>
        <label
          htmlFor='company'
          className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
        >
          <div>
            Key strengths and skills that stand out{" "}
            <span className='text-slate-500'>(separate with coma)</span>
          </div>
        </label>
        <input
          type='text'
          placeholder='e.g. exceptional communication skills, strong attention to detail, strategic thinking'
          id='company'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
        />
      </div>
    </>
  );
};

export const PositionField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <>
      <div className='w-full mb-5'>
        <label
          htmlFor='company'
          className='flex items-center gap-3 mb-5 font-medium transition dark:text-gray-300'
        >
          Position or job title{" "}
          <span className='text-slate-500'>
            (of the person being recommended)
          </span>
        </label>
        <input
          type='text'
          placeholder='e.g. Marketing Manager, Software Developer'
          id='company'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-700 focus:border-gray-300'
        />
      </div>
    </>
  );
};
