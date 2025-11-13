import React from "react";
import { Outlet, } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayout = () => {
  
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-5 ">
        <section className="right-side  min-h-[calc(100vh-285px)]">
         <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
      {/* #f88e0f ,  #00bbae */}
    </div>
  );
};

export default MainLayout;
