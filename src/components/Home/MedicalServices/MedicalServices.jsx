import React from "react";
import succedDoctors from "../../../assets/success-doctor.png";
import succedReviw from "../../../assets/success-review.png";
import succedPatients from "../../../assets/success-patients.png";
import succedStaff from "../../../assets/success-review.png";
const MedicalServices = () => {
  return (
    <div className="my-24 ">
      <h1 className="text-center text-5xl font-semibold">
        {" "}
        We Provide Best Medical Services
      </h1>

      <p className="text-lg text-[#646158] text-center mt-4 mb-8 ]">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>

      <div className=" flex justify-center gap-8">
        {/* 1111111 */}
        <div className="bg-[#FFFF] shadow-2xl px-12 py-10 rounded-2xl">
          <img src={succedDoctors} alt="" />
          <p className="text-6xl font-bold">400+ </p>
          <h3 className="text-xl text-[#646158] font-bold">Total Doctors </h3>
        </div>
        {/* 2222222 */}
        <div className="bg-[#FFFF] shadow-2xl px-12 py-10 rounded-2xl">
          <img src={succedReviw} alt="" />
          <p className="text-6xl font-bold">400+ </p>
          <h3 className="text-xl text-[#646158] font-bold"> Total Review</h3>
        </div>
        {/*  33333*/}
        <div className="bg-[#FFFF] shadow-2xl px-12 py-10 rounded-2xl">
          <img src={succedPatients} alt="" />
          <p className="text-6xl font-bold">400+ </p>
          <h3 className="text-xl text-[#646158] font-bold">Patience</h3>
        </div>
        {/* 444444 */}
        <div className="bg-[#FFFF] shadow-2xl px-12 py-10 rounded-2xl">
          <img src={succedStaff} alt="" />
          <p className="text-6xl font-bold my-3">400+ </p>
          <h3 className="text-xl text-[#646158] font-bold">Total Stuffs</h3>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
