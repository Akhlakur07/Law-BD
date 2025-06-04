import React from "react";
import lawerimg from "../../assets/success-lawyer.png";
import reviewimg from "../../assets/success-review.png";
import caseimg from "../../assets/success-hammer.png";
import stuffimg from "../../assets/success-staffs.png";

const Services = () => {
  return (
    <div className="mx-40 my-[100px]">
      <h2 className="text-center text-[40px] font-extrabold">
        We Provide Best Law Services
      </h2>

      <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>

      <div className="flex justify-between mt-8">

        <div className="bg-[#f3f3f3] py-10 px-14 w-[22%] rounded-2xl">
          <img src={lawerimg} alt="" />
          <p className="text-5xl font-extrabold mt-5">199+</p>
          <p className="text-xl font-medium text-gray-500 mt-3">Total Lawyer</p>
        </div>

        <div className="bg-[#f3f3f3] py-10 px-14 w-[22%] rounded-2xl">
          <img src={reviewimg} alt="" />
          <p className="text-5xl font-extrabold mt-5">467+</p>
          <p className="text-xl font-medium text-gray-500 mt-3">Total Reviews</p>
        </div>

        <div className="bg-[#f3f3f3] py-10 px-14 w-[22%] rounded-2xl">
          <img src={caseimg} alt="" />
          <p className="text-5xl font-extrabold mt-5">1900+</p>
          <p className="text-xl font-medium text-gray-500 mt-3">Case Initiated</p>
        </div>

        <div className="bg-[#f3f3f3] py-10 px-14 w-[22%] rounded-2xl">
          <img src={stuffimg} alt="" />
          <p className="text-5xl font-extrabold mt-5">300+</p>
          <p className="text-xl font-medium text-gray-500 mt-3">Total Stuffs</p>
        </div>

      </div>

    </div>
  );
};

export default Services;
