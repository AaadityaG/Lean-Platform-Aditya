import React from "react";
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import Button from './Button'

const Form = () => {
  return (
    <div className="w-full flex flex-col h-full items-center gap-5">
      <h1 className="font-bold text-[21px] lg:text-4xl md:text-4xl mb-5 text-dark-primary mt-10">
        Create your Love Timeline
      </h1>
      <FormSection1 />
      <FormSection2 />
      <Button text="Create Timeline" className="mb-10"></Button>
    </div>
  );
};

export default Form;
