import React from "react";
import { useLoaderData, useParams } from "react-router";
import DoctorSample2 from "../../../assets/doctor-sample.png";
import { FaRegRegistered } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
const DoctorDetails = () => {
  const { registrationNumber } = useParams();

  const alldoctorData = useLoaderData();

  const singleDoctor = alldoctorData.find(
    (doctor) => doctor.registrationNumber === registrationNumber
  );

  const {
    profileDescription,
    name,
    education,
    speciality,
    workingAt,
    availability,
    consultationFee,
  } = singleDoctor;
  console.log(singleDoctor);

  return (
    <div>
      <section>
        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl  py-16 mb-8 mx-20">
          <h1 className="text-4xl font-bold text-center mb-4">
            Doctor's Profile Details
          </h1>
          <p className="mx-[15%] text-lg text-center">{profileDescription}</p>
        </div>
        {/* card section */}

        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl  py-16 mb-8 mx-20 flex items-center justify-center gap-24">
          <div>
            <img src={DoctorSample2} alt="" />
          </div>
          {/* card container */}
          <div>
            <h1 className="font-bold text-3xl mb-2">{name}</h1>
            <p className="py-3">
              <h2 className="font-semibold text-[#0F0F0F99] text-md ">
                {education}
              </h2>
              <h2 className="font-semibold text-[#0F0F0F99] text-md ">
                {speciality}
              </h2>
            </p>

            <p>
              <h2 className="font-semibold text-[#0F0F0F99] text-md mb-2">
                Working at
              </h2>
              <h2 className="font-bold  text-md ">{workingAt}</h2>
            </p>

            <div className="my-3 border-1 border-dashed border-[#cfc89e] w-[90%]"></div>
            <h3 className="flex items-center gap-3">
              <span>
                <FaRegRegistered />
              </span>
              <span className="font-semibold text-[#0F0F0F99] text-lg">
                Reg No : {registrationNumber}
              </span>
            </h3>
            <div className="my-3 border-1 border-dashed border-[#cfc89e] w-[90%]"></div>

            <h3 className="flex gap-3 items-center">
              <span className="font-bold"> Availablity </span>
              {availability.map((day) => (
                <button className="flex gap-3 text-[#FFA000] bg-[#f7ebd6]  px-5 py-1 rounded-2xl">
                  {day}
                </button>
              ))}
            </h3>
            <p className="mt-4">
              <span className="font-bold mr-2">Consultaion Fee : </span>

              <span className="font-bold text-[#176AE5] mr-2">
                {consultationFee} Tk
              </span>

              <span className="text-[#0F0F0F99] text-sm">
                &#40; include vat &#41;
              </span>

              <span className="text-[#176AE5] text-sm">per consultation</span>
            </p>
          </div>
        </div>

        {/* booking */}
        <div></div>
      </section>

      {/* Appointment */}

      <section className="bg-[#FFFF] shadow-2xl rounded-2xl p-10 mb-20 mx-20">
        <h1 className="text-2xl font-bold text-center">Book an Appointment</h1>
        <p className="flex justify-between my-8">
          <h3 className="font-bold">Availability</h3>
          <h3 className="bg-[#d6e7db] text-[#09982F] px-6 py-1 rounded-2xl">
            Dooctor Available Today
          </h3>
        </p>

        <p className="flex items-center bg-[#f5e4c7] text-[#FFA000] text-sm rounded-2xl mb-12">
          <span className="mx-2">
            <PiWarningCircleBold />
          </span>
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>

        <div className="text-center bg-[#176AE5] rounded-2xl py-1">
          <button className=" text-white  ">Book Appoinment Now</button>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;
