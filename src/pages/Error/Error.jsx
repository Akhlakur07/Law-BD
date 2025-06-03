import React from "react";
import { Link } from "react-router";
import Navbar from "../../components/Header/Navbar";
import '../../App.css';

const Error = () => {
  return (
    <div className="mulish-font">
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-500">404 error</h1>
            <p className="py-6">
              Oops! The page you are looking for does not exist. It might have
              been removed, renamed, or did not exist in the first place.
            </p>
            <Link to="/">
              <button className="btn btn-success">Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
