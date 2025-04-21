import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Roots = () => {
  return (
    <div className="bg-[#EFEFEF]">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
