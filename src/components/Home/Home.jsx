import React, { useState } from "react";
import Banner from "./Banner/Banner";
import BestDoctors from "./BestDoctors/BestDoctors";
import { useLoaderData } from "react-router";
import MedicalServices from "./MedicalServices/MedicalServices";

const Home = () => {
  const doctorsdata = useLoaderData();
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const displayDoctors = showAllDoctors ? doctorsdata : doctorsdata.slice(0, 6);
  return (
    <div>
      <Banner></Banner>

      <section>
        {/* doctors description */}
        <div className="mt-24 text-center">
          <h1 className="font-extrabold text-5xl ">Our Best Doctors</h1>
          <p className="mb-16 mt-9 w-[70%] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        {/* best doctors part/main part  */}

        <div className="grid grid-cols-3 gap-6 px-20">
          {displayDoctors.map((doctor) => (
            <BestDoctors key={doctor.id} doctor={doctor}></BestDoctors>
          ))}
        </div>

        {/* medical serdices section */}
        <div className="text-center">
          <button
            onClick={() => setShowAllDoctors(!showAllDoctors)}
            className="bg-[#176AE5] text-xl text-white font-semibold p-3 px-9 rounded-3xl mt-14"
          >
            {showAllDoctors ? "Show less " : "  View All Doctors"}
          </button>
        </div>
      </section>
      <MedicalServices></MedicalServices>
    </div>
  );
};

export default Home;
