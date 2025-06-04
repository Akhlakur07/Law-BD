import React from "react";
import { Link } from "react-router";

const Bookings = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-[40px] font-extrabold">
        You have not booked any appointmet yet
      </h1>
      <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience..
      </p>
      <Link to="/">
        <div className="flex justify-center mt-10">
          <button className="btn btn-info btn-wide p-8 text-lg text-white rounded-xl">Book an Appointment</button>
        </div>
      </Link>
    </div>
  );
};

export default Bookings;
