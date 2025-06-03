import React from "react";
import bannerimg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="mx-40">
      <div
        className="hero min-h-screen rounded-3xl"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        <div className="text-center text-neutral-content">
          <h1 className="mb-5 text-5xl font-extrabold leading-16 tracking-wide w-3/6 mx-auto">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="text-base font-medium w-3/5 mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
