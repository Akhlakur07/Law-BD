import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import AllLawyers from "../AllLawyers/AllLawyers";
import { useLoaderData } from "react-router";
import Services from "../Services/Services";
import Loading from "../Loading/Loading";

const Home = () => {
  const lawyersData = useLoaderData();
  console.log(lawyersData)
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 200);
  return (
    <div>
      <div className={`mt-50 flex justify-center min-h-[60vh] ${load ? "" : "hidden"}`}>
        <Loading></Loading>
      </div>
      <div className={`${load ? "hidden" : ""}`}>
        <Banner></Banner>
        <AllLawyers data={lawyersData}></AllLawyers>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
