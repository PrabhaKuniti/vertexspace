import React from "react";

export const Categories = () => {
  const categories = [
    {
      title: "Living Room",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1294c3e73c2a8e72430cbb3da3de57b73618dcfcbd1a1e58074a4341f31daa61?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Dining",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c6714fa37d49ca1b2e153280871821f3dde1211a61568e7bd3c8e56c0734a1a?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Bedroom",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c95889b44ce81c32b5c6ddb94851be85792841deaa03b3b3d13008d7cf504a8?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Office",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2d968931397828bee73aaac4ffd0ffd735c4a1a7a254c70d8425d4472122105?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Storage",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/978efd72deb7fba82b6c9389a468ca1363856ba267b6dda65f51843e83af05f0?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Study Room",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ad6739d4447fda0c106486e77c4c0ce8954495eeb61402f811f461a848e64e4?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
  ];

  return (
    <div className="flex gap-5 justify-between mt-6 w-full text-xl font-bold text-black max-w-[1372px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c94d6e7a73b5b8146712f1b3b1d5011e1555482f5753a6abbd5efc65022a4ee?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
        alt="Previous"
      />
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d859a5ae788181d6b305db267b4eb960687a4438b631bf7befa037a8d241a210?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
        alt="Next"
      />
    </div>
  );
};

const CategoryCard = ({ title, image }) => {
  return (
    <div className="flex relative flex-col px-9 pt-11 pb-0.5 aspect-[0.995] w-[197px] max-md:px-5">
      <img
        loading="lazy"
        src={`http://b.io/ext_${
          13 + 2 * categories.indexOf({ title, image })
        }-`}
        className="object-cover absolute inset-0 size-full"
        alt={title}
      />
      <div className="relative">{title}</div>
      <img
        loading="lazy"
        src={image}
        className="object-contain self-center mt-5 w-full aspect-square shadow-[0px_0px_0px_rgba(0,0,0,0.08)]"
        alt={`${title} furniture`}
      />
    </div>
  );
};
