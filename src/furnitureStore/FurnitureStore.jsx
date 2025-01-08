import React from "react";
import { Navigation } from "./navigation/Navigation";
import { Hero } from "./hero/Hero";
import { Categories } from "./categories/Categories";
import { Products } from "./products/Products";
import { Process } from "./process/Process";
import { About } from "./about/About";
import { Features } from "./features/Features";
import { Footer } from "./footer/Footer";

export const FurnitureStore = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-6">
      <div className="flex flex-col items-center w-full bg-white max-md:max-w-full">
        <Navigation />
        <Hero />
        <Categories />
        <Products />
        <Process />
        <About />
        <Features />
        <Footer />
      </div>
    </div>
  );
};
