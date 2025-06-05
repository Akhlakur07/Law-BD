import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import NoLawyer from "../NoLawyer/NoLawyer";
import {
  addAppointment,
  getAppointment,
  getCurrentDay,
} from "../../utility/logic";
import { toast } from "react-toastify";

const LawyerDetails = () => {
  const { lawyerLicense } = useParams();
  const data = useLoaderData();
  const lawyer = data.find((lawyer) => lawyer.license === lawyerLicense);
  if (!lawyer) {
    return (
      <div>
        <NoLawyer data={lawyerLicense}></NoLawyer>
      </div>
    );
  }
  const { name, image, availability, experience, expertise, license, fee } =
    lawyer;

  const currentDay = getCurrentDay();
  const isAvailableToday = availability.includes(currentDay);

  const allAppointments = getAppointment();
  const isBooked = allAppointments.includes(license);

  const notAvailableMessage = () => {
    toast.error(
      "This lawyer is not available today. Please choose another day."
    );
  };

  const handleBookAppointment = (license) => {
    addAppointment(license);
  };

  return (
    <div>
      <div className="mx-40 my-8 bg-[#f3f3f3] p-[72px] rounded-2xl">
        <h2 className="text-center text-4xl font-extrabold">
          Lawyer’s Profile Details
        </h2>

        <p className="text-center text-base font-medium mt-4 w-3/4 mx-auto text-gray-500">
          Whether you’re facing legal challenges or simply seeking professional
          advice, our expert lawyers are here to help. Browse detailed profiles
          to learn more about each lawyer’s qualifications, specialties,
          availability, and consultation fees—so you can choose the right
          advocate for your needs with confidence.
        </p>
      </div>
      <div className="flex mx-40 border p-10 border-gray-300 rounded-2xl gap-14 my-8 items-center">
        <img src={image} alt="" className="w-[30%] rounded-2xl" />
        <div>
          <button className="badge badge-soft badge-info rounded-xl h-8">
            {experience}
          </button>
          <h2 className="mt-4 text-[32px] font-extrabold">{name}</h2>
          <div className="flex items-center gap-10 mt-4">
            <p className="text-[#14141499] font-medium">{expertise}</p>
            <p className="text-[#141414B3] font-medium">
              ® License No: {license}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="font-bold text-[#141414B3]">Availability</p>
            <div className="flex gap-4">
              {availability.map((day, index) => (
                <span
                  key={index}
                  className="badge badge-soft badge-warning mr-2 rounded-4xl"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 font-bold text-[#141414B3]">
            Consultation Fee: <span className="text-green-500">${fee}</span>
          </p>
        </div>
      </div>

      <div className="mx-40 border p-10 border-gray-300 rounded-2xl mb-[98px]">
        <h3 className="text-center font-bold text-2xl border-b-2 border-gray-200 border-dashed pb-4">
          Book an Appointment
        </h3>
        <div className="flex justify-between mt-[22px] border-b border-gray-200 pb-5">
          <p className="font-bold text-lg">Availability</p>
          <div className="badge h-7 rounded-xl bg-zinc-100 font-medium text-sm border border-gray-200">
            {isAvailableToday ? (
              <span className="text-green-500">Available Today</span>
            ) : (
              <span className="text-pink-600">Not Available Today</span>
            )}
          </div>
        </div>
        <div className="badge bg-[#FFA0001A] text-[#FFA000] p-3.5 font-medium rounded-4xl mt-[16.5px] border border-gray-100 h-[38px]">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g fill="currentColor">
              <path
                d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <line
                x1="9"
                y1="6.5"
                x2="9"
                y2="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></line>
              <path
                d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                fill="currentColor"
                data-stroke="none"
                stroke="none"
              ></path>
            </g>
          </svg>
          Due to high client volume, we are currently accepting appointments for
          today only. We appreciate your understanding and cooperation.
        </div>
        <div
          onClick={
            isAvailableToday
              ? () => handleBookAppointment(license)
              : notAvailableMessage
          }
        >
          <Link to={isAvailableToday && !isBooked ? "/bookings" : ""}>
            <button className="btn bg-[#0EA106] w-full mt-10 rounded-2xl text-white text-xl font-bold h-13">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
