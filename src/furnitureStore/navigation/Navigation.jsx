import React from "react";

export const Navigation = () => {
  const navItems = [
    { label: "Home", hasIcon: false },
    { label: "Living", hasIcon: true },
    { label: "Storage", hasIcon: true },
    { label: "Dining", hasIcon: true },
    { label: "Bedroom", hasIcon: true },
    { label: "Matress", hasIcon: true },
    { label: "Study", hasIcon: true },
    { label: "Office", hasIcon: true },
    { label: "Outdoor", hasIcon: true },
  ];

  return (
    <nav className="flex flex-wrap gap-5 justify-between items-start self-stretch px-16 w-full bg-black shadow-[0px_0px_0px_rgba(0,0,0,0.08)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center self-start text-base font-bold text-white whitespace-nowrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/530ef916b575e8882a373b6e691cbbb464bedb1cf0f4139253eb438e05be90ea?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[1.02] shadow-[0px_0px_0px_rgba(0,0,0,0.08)] w-[124px]"
          alt="Company Logo"
        />
        {navItems.map((item, index) => (
          <div key={index} className="flex gap-1.5 self-stretch my-auto">
            <div className="grow">{item.label}</div>
            {item.hasIcon && (
              <img
                loading="lazy"
                src={`http://b.io/ext_${index + 2}-`}
                className="object-contain shrink-0 self-start w-4 aspect-square"
                alt={`${item.label} icon`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-10 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55771428e78525369994f1b65c417068fad5fc047f721920d1619cf1e4842d5f?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Search"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7133d7550df9c730cb1fe4442f8e48942fbda4a8b3f2f8232a636fd6444408f4?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Cart"
        />
      </div>
    </nav>
  );
};
