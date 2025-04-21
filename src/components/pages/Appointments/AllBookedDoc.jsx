import React from "react";
import { toast } from "react-toastify";

const AllBookedDoc = ({ doc, docBookedlist, setBocBookedlist }) => {
  const { name, education, consultationFee, registrationNumber } = doc;

  const cancelBooking = (RegNo) => {
    // 1. Update storage
    const bookedDoc = JSON.parse(localStorage.getItem("bookedDoctors")) || [];
    const updated = bookedDoc.filter((reg) => reg !== RegNo);
    localStorage.setItem("bookedDoctors", JSON.stringify(updated));

    // 2. Update state
    setBocBookedlist(
      docBookedlist.filter((doctor) => doctor.registrationNumber !== RegNo)
    );

    toast.error("Appointment Canceled!");
  };

  return (
    <div>
      <div className="mx-20 my-10 bg-[#FFFF] shadow-2xl p-6 rounded-2xl ">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-lg">{name}</h1>
            <h3 className=" text-gray-600">{education}</h3>
          </div>
          <div className="text-sm text-gray-600">
            Appointment Fee :{consultationFee} Taka+ Vat
          </div>
        </div>

        <div
          onClick={() => cancelBooking(registrationNumber)}
          className="text-center border-[#e52517] border-1 rounded-2xl py-1 mt-6"
        >
          <button className=" text-[#e42020]  ">Cancel appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AllBookedDoc;
