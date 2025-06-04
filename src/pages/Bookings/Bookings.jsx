import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getAppointment, removeAppointment } from "../../utility/logic";
import Appointment from "../Appointment/Appointment";

const Bookings = () => {
  const data = useLoaderData();
  const [app, setApp] = useState([]);

  useEffect(() => {
    const storedBookings = getAppointment();
    const bookedAppointments = data.filter((lawyer) =>
      storedBookings.includes(lawyer.license)
    );
    setApp(bookedAppointments);
  }, [data]);

  // Handler to remove appointment from state and localStorage
  const handleRemove = (license) => {
    removeAppointment(license);
    setApp((prev) => prev.filter((lawyer) => lawyer.license !== license));
  };

  const isEmpty = app.length === 0;
  return (
    <div>
      <div
        className={`${
          isEmpty ? "" : "hidden"
        } min-h-[65vh] flex flex-col items-center justify-center gap-5`}
      >
        <h1 className="text-center text-[40px] font-extrabold">
          You have not booked any appointmet yet
        </h1>
        <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience..
        </p>
        <Link to="/">
          <div className="flex justify-center mt-10">
            <button className="btn btn-info btn-wide p-8 text-lg text-white rounded-xl">
              Book an Appointment
            </button>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-13 mt-10 mx-40 mb-[220px]">
        {app.map((singleLawyer) => (
          <Appointment
            key={singleLawyer.license}
            data={singleLawyer}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookings;