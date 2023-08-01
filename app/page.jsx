import Banner from "@/components/Banner";
import BestCategories from "@/components/BestCategories";
import Header from "@/components/Header";
import Home from "@/components/Home";

import React from "react";

const page = () => {
  return (
    <main>
      {/* Header */}
      <section className="h-screen w-full rounded-b-2xl bg-lightRed">
        <div className="   ">
          <Header />
          <div>
            <Home />
          </div>
        </div>
      </section>
      <section>
        <Banner />
        <BestCategories/>
      </section>
    </main>
  );
};

export default page;
