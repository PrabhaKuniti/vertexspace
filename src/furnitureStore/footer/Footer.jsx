import React from "react";

export const Footer = () => {
  const quickLinks = [
    "Home",
    "Living",
    "Storage",
    "Dining",
    "Bedroom",
    "Matress",
    "Study",
    "Office",
    "Outdoor",
  ];

  const categories = ["Residential", "Institutional", "Commercial"];

  return (
    <footer className="flex z-10 flex-col items-center self-stretch pb-28 mt-32 mb-0 w-full bg-black shadow-[0px_0px_0px_rgba(0,0,0,0.08)] max-md:pb-24 max-md:mt-10">
      <div className="flex self-stretch w-full bg-slate-300 min-h-[3px]" />
      <div className="flex flex-wrap gap-5 justify-between mt-7 w-full max-w-[1177px]">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6baec0a5a4d75a66e8f088190ab3bd858fc373972eca2660d3ce4bc980961387?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
            className="object-contain max-w-full aspect-square shadow-[0px_0px_0px_rgba(0,0,0,0.08)] w-[124px]"
            alt="Footer Logo"
          />
          <p className="mt-5 text-base text-white">
            Your dream space deserves the best execution
          </p>
          <div className="flex gap-2 mt-6">
            <SocialIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/321c70a9b4b5b8bac1721402d6445c6d7c82e5173116012f2022ead6badffa34?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
              alt="Facebook"
            />
            <SocialIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94cfe1125aa52fc0ee5e5825a9f85cede751d9fa62be105ac82f1ba7a53b3f4?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
              alt="Instagram"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <FooterLinks title="Quick links" links={quickLinks} />
          <FooterLinks title="Categories" links={categories} />
        </div>
      </div>
      <p className="mt-2.5 text-sm text-white">
        2024 © All rights reserved - Cozy Comfort
      </p>
    </footer>
  );
};

const SocialIcon = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    className="object-contain shrink-0 w-8 aspect-square"
    alt={alt}
  />
);

const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col items-start">
    <h3 className="font-bold text-black">{title}</h3>
    {links.map((link, index) => (
      <a
        key={index}
        href={`#${link.toLowerCase()}`}
        className="mt-3 first:mt-6 text-white hover:text-gray-300 transition-colors"
      >
        {link}
      </a>
    ))}
  </div>
);
