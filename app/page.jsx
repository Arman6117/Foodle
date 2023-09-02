import Banner from "@/components/Banner";
import BestCategories from "@/components/BestCategories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Menu from "@/components/Menu";

import React from "react";

const page = () => {
  
 
  return (
    <main>
      {/* Header */}
      <section className="h-screen w-screen rounded-b-2xl bg-lightRed">
        <div className="   ">
          <Header />
          <div>
            <Home />
          </div>
        </div>
      </section>
      <section>
        <Banner />
        <BestCategories />
      </section>
      <section className="">
        <Menu />
      </section>
      <footer className="">
        <Footer />
      </footer>
    </main>
  );
};

export default page;
