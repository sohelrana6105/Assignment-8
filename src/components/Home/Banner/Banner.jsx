import React from "react";
import Bannerimg1 from "../../../assets/banner-img-1.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#EFEFEF] to-[#fcfbfb] border-5 border-[#faf7f7] rounded-3xl py-16 px-40 mx-8">
        <div className="">
          <h2 className="text-5xl font-bold text-center">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h2>
          <p className="mt-4 text-[#0F0F0F] text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a <br />{" "}
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
        <div className="flex justify-center items-center text-center gap-2 mt-6">
          <input
            type="text"
            name=""
            id=""
            className="bg-white border border-gray-200 focus:outline-none focus:shadow-outline md:w-[60%] w-[80%]  py-2 shadow-md broder rounded-3xl px-2"
            placeholder="search any doctor..."
          />
          <button className="bg-[#176AE5] border rounded-3xl text-white px-5 py-2">
            {" "}
            Search Now
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <img src={Bannerimg1} alt="" />
          <img src={Bannerimg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
