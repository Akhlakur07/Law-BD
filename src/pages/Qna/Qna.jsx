import React from "react";

const Qna = ({ data }) => {
  const { question, answer } = data;
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-2xl font-medium p-11">{question}</div>
        <div className="collapse-content text-xl font-normal text-[#62748E] leading-8 px-11">
          <p className="pb-5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
