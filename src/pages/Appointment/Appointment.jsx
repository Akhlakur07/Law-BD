import React from "react";

const Appointment = ({ data, onRemove }) => {
  const { name, expertise, fee, license } = data;
  return (
    <div className="border border-gray-300 rounded-2xl p-6 flex flex-col gap-4 mb-16">
      <p className="text-xl font-bold">{name}</p>
      <div className="flex justify-between border-b-2 border-gray-300 border-dashed pb-4">
        <p className="text-lg font-medium text-[#14141499]">{expertise}</p>
        <p className="text-lg font-medium text-[#14141499]">
          Appointment Fee: ${fee}
        </p>
      </div>
      <button
        onClick={() => onRemove(license)}
        className="btn btn-soft btn-error border border-pink-500 rounded-2xl text-xl font-semibold"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default Appointment;