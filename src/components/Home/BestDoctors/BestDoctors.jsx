import React from "react";
import DoctorSample from "../../../assets/doctor-sample.png";
import { FaRegRegistered } from "react-icons/fa";

const BestDoctors = ({ doctor }) => {
  console.log(doctor);
  const { name, education, experience, registrationNumber } = doctor;

  return (
    <div className="bg-[#FFFFFF] p-6 shadow-2xl rounded-2xl ">
      <div className="card-img w-[100%] flex justify-center">
        <img className="w-[90%]" src={DoctorSample} alt="" />
      </div>
      <div className="card-container ">
        <p className="mt-3 mb-2">
          <button className="text-[#09982F] bg-[#c1dfc9] rounded-3xl py-1 px-4 mr-3">
            Available
          </button>
          <button className="text-[#176AE5] bg-[#c3cedf] rounded-3xl py-1 px-4">
            {experience}+experience
          </button>
        </p>
        <h1 className="font-bold text-2xl mb-2">{name}</h1>
        <h2 className="font-semibold text-[#0F0F0F99] text-lg">{education} </h2>

        <div className="my-3 border-1 border-dashed border-[#cfc89e] w-[90%]"></div>
        <h3 className="flex items-center gap-3">
          <span>
            <FaRegRegistered />
          </span>
          <span className="font-semibold text-[#0F0F0F99] text-lg">
            Reg No : {registrationNumber}
          </span>
        </h3>
        <div className="text-center mt-3 ">
          <button className="text-[#176AE5] text-lg font-semibold border-2 border-[#176AE5] px-24 rounded-3xl py-1">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestDoctors;
