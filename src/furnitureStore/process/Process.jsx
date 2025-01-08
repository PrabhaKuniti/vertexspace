import React from "react";

export const Process = () => {
  const steps = [
    {
      title: "Select your dream model",
      description:
        "From modern minimalism to classic elegance, choose what resonates with you.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f11b2d9fa2a8776223b1c97e691402aea3389c60777ac95cfb1b36de4e0ece3?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Customize to your requirement",
      description:
        "Choose from rich woods, luxurious fabrics, and robust metals to complement your style.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6db4f4e9b103698ac801c0ddf493d5d81c566e2d12d2e6f630781dfe80c64f6?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Order Processing",
      description:
        "Your order is carefully reviewed and processed to ensure all details are correct.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d331a92877d804ada3a2f0924730c832bc840b0a466965cbcbcc7fc23e5ffd8?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Quality Assurance",
      description:
        "Our commitment to quality ensures your satisfaction with every piece you choose.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad99d8f405b756b052403dbf5a001649188262b6eae6611d7bac600362642195?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
  ];

  return (
    <section className="mt-20 w-full max-w-[1210px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-bold text-black mb-11">Our Process</h2>
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
        {steps.map((step, index) => (
          <ProcessStep key={index} number={index + 1} {...step} />
        ))}
      </div>
    </section>
  );
};

const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        loading="lazy"
        src={icon}
        className="object-contain aspect-square w-[150px]"
        alt={`Step ${number}`}
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-base mt-2">{description}</p>
    </div>
  );
};
