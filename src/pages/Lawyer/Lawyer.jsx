import React from "react";

const Lawyer = ({ data }) => {
  const { name, availability, experience, expertise, license, image } = data;
  return (
    <div className="flex border-1 rounded-2xl border-gray-400 gap-14 p-6 h-60">
      {/* <img src={image} alt="Lawyer" className="w-[40%] h-[90%] rounded-2xl" /> */}
        <img
            src={image}
            alt="Lawyer"
            className="w-[40%] h-[100%] rounded-2xl object-cover"
        />
      <div>
        <div className="flex items-center gap-2 mb-2">
          <button className="btn btn-soft btn-accent h-6 rounded-xl">
            {availability}
          </button>
          <button className="btn btn-soft btn-info h-6 rounded-xl">
            {experience}
          </button>
        </div>
        <h2 className="text-[32px] font-extrabold mb-1">{name}</h2>
        <p className="mb-1">{expertise}</p>
        <p>® License No: {license}</p>
        <button className="btn btn-outline btn-info w-full mt-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Lawyer;
