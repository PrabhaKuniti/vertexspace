import React from "react";

export const Products = () => {
  const products = [
    {
      name: "Luxury Bed Set",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8132c70f84081391a0c547122b192511056b1d66501139cfec28db9caf0b9a73?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      name: "Luxury Sofa Set",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1e3b8a2e999bec1550fdb38b0edeac23cadcb93689f8e8121ec62f962f8615f1?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      name: "Luxury Dining Table",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/60686b8b21c4ed39a6aa57bd7cabaf7f9f407638bc38d95a0cf8aaad60f094a3?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      name: "Elegant candle set",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a38211c81c6a2eede2d163da679eb5ba20a2e3489a78505c9c158b68fda029d?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      name: "Elegant sofa set",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6de35b36e3dd8fd495ac35208a9cd266048df851dddd0af142ea105b5efb988a?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      name: "Fruit platter",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a5bb68bd8725b09bd093edc023203a4dac41f20c8b0f81648df860a9262e44cc?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
  ];

  return (
    <section className="w-full max-w-[1306px]">
      <h2 className="text-3xl font-bold text-black mb-8">Trending Products</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ name, image }) => {
  return (
    <div className="flex relative flex-col pb-11 text-base text-black aspect-[1.139]">
      <img
        loading="lazy"
        src={image}
        className="object-contain w-full aspect-[1.64]"
        alt={name}
      />
      <div className="relative self-start mt-4 ml-5">{name}</div>
    </div>
  );
};
