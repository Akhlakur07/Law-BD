import React from "react";
import { Link } from "react-router";

const NoLawyer = ({ data }) => {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-[40px] font-extrabold">
        No Lawyers Found!!
      </h1>
      <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
        No Lawyer Found with this License No-
      </p>
      <p className="font-bold text-lg">®{data}</p>
      <Link to="/">
        <div className="flex justify-center mt-10">
          <button className="btn btn-success btn-wide p-8 text-lg text-white rounded-xl">
            View All Lawyer
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NoLawyer;
