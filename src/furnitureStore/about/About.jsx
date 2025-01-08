import React from "react";

export const About = () => {
  const features = [
    {
      title: "Inspired Living",
      description:
        "Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.",
    },
    {
      title: "Easy Shopping",
      description:
        "From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.",
    },
    {
      title: "Exceptional Savings",
      description:
        "By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.",
    },
  ];

  return (
    <section className="mt-16 max-w-[1210px] w-full">
      <h2 className="text-3xl font-bold text-black">About us</h2>
      <p className="mt-3.5 text-xl text-black max-md:max-w-full">
        Discover the epitome of luxury living with our exclusive furniture
        collection. Each piece is meticulously crafted to
      </p>
      <div className="grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-1">
        {features.map((feature, index) => (
          <AboutFeature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const AboutFeature = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-black">{title}</h3>
      <p className="mt-4 text-base">{description}</p>
    </div>
  );
};
