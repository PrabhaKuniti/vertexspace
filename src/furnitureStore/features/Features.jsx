import React from "react";

export const Features = () => {
  const features = [
    {
      title: "500 + Collections",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/066cd2fa2325b69e4d1f2ac4a6e83a8d6b86f351888907b01aad3713b7bb9564?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "300 + Fabrics",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddca9b59c1baaf0592e3d9a835bb3d5500105faf884095e1c4eb15f6f7e1254a?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Top-notch Quality",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316d796f3a3ff7e440ff918481b64843d2c48cb878027bc69181e4f45c6c6bcb?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
    {
      title: "Colour and Length customization",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48e9882103447e2626978af2c2356c2c681b428452ac46639cef3604ff0e47e9?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447",
    },
  ];

  return (
    <section className="mt-20 w-full max-w-[1210px]">
      <h2 className="text-3xl font-bold text-black mb-8">
        Why Vibrer Stands Out?
      </h2>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex relative flex-col pt-16 pb-5 text-base text-black min-h-[320px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13dacd4cd25ce10bf507611d75334b76003e4ffe263c4b385e72d0679f32bf3f?placeholderIfAbsent=true&apiKey=776d13e6b1a24ae39c1d77e742d62447"
        className="object-cover absolute inset-0 size-full"
        alt="Feature background"
      />
      <img
        loading="lazy"
        src={icon}
        className="object-contain self-center aspect-square w-[60px]"
        alt={title}
      />
      <div className="flex relative flex-col items-start px-6 mt-14">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};
