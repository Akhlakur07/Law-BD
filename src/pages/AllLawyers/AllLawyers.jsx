import React, { Suspense } from "react";
import Lawyer from "../Lawyer/Lawyer";

const AllLawyers = ({ data }) => {
  console.log(data);
  return (
    <div className="mx-40 my-[100px]">
      <h2 className="text-center text-[40px] font-extrabold">
        Our Best Lawyers
      </h2>

      <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-13 mt-10">
          {data.map((singleLawyer) => (
            <Lawyer key={singleLawyer.license} data={singleLawyer}></Lawyer>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllLawyers;
