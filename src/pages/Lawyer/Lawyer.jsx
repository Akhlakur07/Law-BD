import React from "react";
import { Link } from "react-router";
import { getCurrentDay } from "../../utility/logic";

const Lawyer = ({ data }) => {
  const { name, experience, expertise, license, image, availability } = data;

  const currentDay = getCurrentDay();
  const isAvailableToday = availability.includes(currentDay);
  return (
    <div className="flex border-1 rounded-2xl border-gray-300 gap-14 p-6 h-60">
      <img
        src={image}
        alt="Lawyer"
        className="w-[40%] h-[100%] rounded-2xl object-cover"
      />
      <div>
        <div className="flex items-center gap-2 mb-2">
          <button className="badge h-6 rounded-xl">
            {isAvailableToday ? <span className="text-green-500">Available</span> : <span className="text-pink-600">Not Available</span>}
          </button>
          <div className="badge badge-soft badge-info h-6 rounded-xl">
            {experience}
          </div>
        </div>
        <h2 className="text-[32px] font-extrabold mb-1">{name}</h2>
        <p className="mb-1 pb-1 border-b border-gray-300 border-dashed">{expertise}</p>
        <p>® License No: {license}</p>
        <Link to={`/profile/${license}`}>
          <button className="btn btn-outline btn-info w-full mt-2 border-gray-300 rounded-2xl hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;
