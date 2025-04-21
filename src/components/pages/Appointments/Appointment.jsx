import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import AllBookedDoc from "./AllBookedDoc";

const Appointment = () => {
  const alldoctors = useLoaderData();

  const [docBookedlist, setBocBookedlist] = useState([]);
  const getStoredReg = () => {
    const bookedDocData = localStorage.getItem("bookedDoctors");

    if (bookedDocData) {
      const bookedDoc = JSON.parse(bookedDocData);
      return bookedDoc;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const bookedDoc = getStoredReg();

    const Bookedlist = alldoctors.filter((doctor) =>
      bookedDoc.includes(doctor.registrationNumber)
    );
    setBocBookedlist(Bookedlist);
  }, [alldoctors]);

  return (
    <>
      <div>
        {docBookedlist.length === 0 ? (
          <div className="mx-20 mt-10 mb-24">
            <h1 className="text-4xl font-bold text-center ">
              No appointments booked yet.
            </h1>
            <p className="text-[#0F0F0F99] text-center mt-10 mb-4 ">
              Our Paltform connects you with verified experienced doctors across
              various specialities-all your convenience{" "}
            </p>

            <div className="text-center">
              <NavLink to={"/"}>
                <button className="bg-[#206ee2] text-white p-1 px-6 rounded-xl">
                  Book an Appointment
                </button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center">
              Your Appointments
            </h1>

            <p className="text-[#0F0F0F99] text-center mb-16">
              Our Paltform connects you with verified experienced doctors across
              various specialities-all your convenience{" "}
            </p>

            {docBookedlist.map((doc, index) => (
              <AllBookedDoc
                key={index}
                doc={doc}
                docBookedlist={docBookedlist}
                setBocBookedlist={setBocBookedlist}
              ></AllBookedDoc>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Appointment;
