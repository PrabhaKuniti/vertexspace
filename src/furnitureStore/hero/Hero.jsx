import React from "react";

export const Hero = () => {
  const menuItems = [
    "TV Units",
    "Box Shelves",
    "Shoe Rack",
    "Dressing Table",
    "Wardrobes",
  ];

  return (
    <section className="flex z-10 flex-col items-start self-start mt-0 ml-24 max-w-full text-black w-[784px]">
      <div className="flex flex-col items-start py-4 pr-10 pl-4 ml-40 max-w-full text-sm text-black bg-white border border-solid border-neutral-300 shadow-[0px_0px_0px_rgba(0,0,0,0.08)] w-[206px] max-md:pr-5 max-md:ml-2.5">
        {menuItems.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-2.5" : ""}>
            {item}
          </div>
        ))}
      </div>
      <h1 className="mt-28 text-5xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Affordable Luxury for Every
      </h1>
      <p className="mt-16 text-2xl max-md:mt-10">Shop by room or collection!</p>
      <h2 className="self-end mt-72 text-3xl font-bold max-md:mt-10">
        Product Categories
      </h2>
    </section>
  );
};
