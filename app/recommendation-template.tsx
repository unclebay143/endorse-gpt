import React, { ReactElement, useState } from "react";
import ResponseCard from "./components/response-card";
import Sparkles from "./shared/icons/sparkles";
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
    `I had the pleasure of working alongside ${name} during their time as a ${position} at ${company}. ${name} has an exceptional work ethic, and their commitment to success is unmatched. They have a unique set of skillss that make them a valuable asset to any team, and their ability to lead by example is truly inspiring. ${name} consistently delivered results that exceeded expectations, even under pressure. Their analytical capability and dedication to personal and professional growth make them an ideal candidate for any future opportunities. I highly recommend ${name} for any position they may pursue.`,
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
    role: <PositionField value={position} setValue={setPosition} />,
  };
  return (
    <section>
      <p className='text-center dark:text-gray-300'>OR</p>
      <div className='my-10'>
        <h2 className='text-3xl font-bold text-center transition dark:text-gray-300 text-slate-950'>
          <Sparkles className='inline-block w-8 h-8 mr-1' />
          <span>Use Recommendation Templates</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1'>
        {templates.map((template, index) => (
          <ResponseCard key={index} text={template}>
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
