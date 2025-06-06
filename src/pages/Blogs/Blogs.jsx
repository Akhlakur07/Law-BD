import React, { useState } from "react";
import Loading from "../Loading/Loading";
import { useLoaderData } from "react-router";
import Qna from "../Qna/Qna";

const Blogs = () => {
  const data = useLoaderData();

  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 200);
  return (
    <div>
      <div
        className={`mt-50 flex justify-center min-h-[60vh] ${
          load ? "" : "hidden"
        }`}
      >
        <Loading></Loading>
      </div>
      <div className={`${load ? "hidden" : ""} mx-40`}>
        <h1 className="text-center text-[40px] font-extrabold mt-10">Blogs</h1>
        <div className="mt-7 mb-27">
          {data.map((que) => (
            <Qna key={que.id} data={que}></Qna>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
