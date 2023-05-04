import React, { ReactElement, useState } from "react";
import ResponseCard from "./components/response-card";
import Sparkles, { WhiteSparkles } from "./shared/icons/sparkles";
import ModalWrapper from "./shared/modal-wrapper";

import {
  CompanyField,
  NameField,
  PositionField,
  SkillsField,
} from "./components/modal-fields";
import PlaceholderSpan from "./components/placeholder-span";

const RecommendationTemplate = () => {
  const [name, setName] = useState("[name]");
  const [skills, setSkills] = useState("[skills]");
  const [position, setPosition] = useState("[position]");
  const [company, setCompany] = useState("[company]");
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [activeFieldModal, setActiveFieldModal] = useState<string>("");

  const templates = [
    `${name} is fantastic to work with, and has unique experience in ${skills}. He consistently demonstrated a strong work ethic at ${company} and also a dedication to success. ${name} leads by example and many people at ${company} find his enthusiasm and dedication both inspiring and motivating. He was always able to successfully complete any tasks with favorable results despite deadline pressure. Ambitious and independent expert. He denotes a lot of analytical capability and willingness for both his personal & professional development. Most definitely someone I'd want to to have on my team.`,
    `I had the pleasure of working with ${name} during their time as a ${position} at ${company}. Their dedication to their work and their team was evident in all aspects of their performance. ${name} has a strong work ethic and a unique set of skillss that make them stand out in their field. They consistently delivered excellent results, even under tight deadlines. ${name} has an impressive analytical capability, and their enthusiasm for their work is infectious. I would not hesitate to recommend ${name} for any future endeavors.`,
    // `I had the pleasure of working alongside ${name} during their time as a ${position} at ${company}. ${name} has an exceptional work ethic, and their commitment to success is unmatched. They have a unique set of skillss that make them a valuable asset to any team, and their ability to lead by example is truly inspiring. ${name} consistently delivered results that exceeded expectations, even under pressure. Their analytical capability and dedication to personal and professional growth make them an ideal candidate for any future opportunities. I highly recommend ${name} for any position they may pursue.`,
    `As a colleague of ${name} during their time as a ${position} at ${company}, I have no hesitation in recommending them for any future opportunities. Their expertise in ${skills} was evident in their ability to consistently deliver top-notch results. Furthermore, their strong leadership and communication skills allowed them to effectively collaborate with colleagues across departments. It was a pleasure working with ${name}, and I believe they would be a valuable asset to any organization.`,
    `${name} is a highly skilled ${position} with a proven track record of success. During their time at ${company}, they consistently demonstrated their ability to think creatively and strategically to achieve results. Their proficiency in ${skills} is exceptional and their dedication to continuous learning and development is truly inspiring. I have no doubt that ${name} would make a valuable contribution to any team or organization and I highly recommend them for any future opportunities.`,
    `I have had the pleasure of working with ${name} during their tenure as a ${position} at ${company}. Their expertise in ${skills} is unparalleled and their commitment to excellence is truly impressive. They are a natural leader with exceptional communication skills, and their ability to motivate and inspire others is unparalleled. I would highly recommend ${name} for any future opportunities and I am confident they would make a significant contribution to any team or organization.`,
  ];

  const handlePlaceholderClick = (placeholder: string) => {
    const validPlaceholders = ["name", "skills", "company", "position"];
    if (validPlaceholders.includes(placeholder)) {
      setActiveFieldModal(placeholder);
      setOpenFormModal(true);
    }
  };

  const fieldComponents: { [key: string]: ReactElement } = {
    name: <NameField value={name} setValue={setName} />,
    company: <CompanyField value={company} setValue={setCompany} />,
    skills: <SkillsField value={skills} setValue={setSkills} />,
    position: <PositionField value={position} setValue={setPosition} />,
  };

  return (
    <section>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
          OR
        </span>
      </div>

      <div className='my-10 text-center'>
        <h2 className='text-3xl font-bold  transition dark:text-gray-300 text-slate-950'>
          <Sparkles className='transition dark:hidden inline-block w-8 h-8 mr-1' />
          <WhiteSparkles className='transition hidden dark:inline-block w-8 h-8 mr-1' />

          <span>Use Recommendation Templates</span>
        </h2>
        <span className='mt-3 text-sm font-bold inline-block transition dark:text-gray-300 text-slate-500'>
          Click the{" "}
          <span
            className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer text-blue-500 bg-blue-50 dark:text-blue-300 dark:bg-slate-800 ring-1 ring-inset ring-blue-500/10 transition'
            // className='inline-flex items-center px-2 py-1 mr-1 text-sm font-medium rounded-md cursor-pointer  bg-gray-50 dark:text-gray-300 dark:bg-slate-800 ring-1 ring-inset ring-gray-500/10'
          >
            [placeholders]
          </span>
          to replace with actual content.
        </span>
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1'>
        {templates.map((template, index) => (
          <ResponseCard key={index} index={index} text={template}>
            <PlaceholderSpan
              template={template}
              name={name}
              skills={skills}
              position={position}
              company={company}
              handlePlaceholderClick={handlePlaceholderClick}
            />
          </ResponseCard>
        ))}
      </div>
      {openFormModal && (
        <ModalWrapper open={openFormModal} setOpen={setOpenFormModal}>
          {fieldComponents[activeFieldModal]}
        </ModalWrapper>
      )}
    </section>
  );
};

export default RecommendationTemplate;
