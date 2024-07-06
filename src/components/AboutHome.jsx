import React from "react";
import signature from "/images/sig.png";
import fingerprint from "/images/fingerprint.svg";
import { IoGift } from "react-icons/io5";
import { BsGiftFill } from "react-icons/bs";

const items = [
  {
    icon: fingerprint,
    title: "EXCELLENCE",
    description:
      "We carefully review our strategy every five years. Strategy 2029 is the guideline on which we base our working practices - Delivering Excellence in a Digital World. The strategy summarizes the way we rebuild our sector using digitization with the aim of connecting people and improving lives. In doing so, we continue to position ourselves as the global logistics service provider. Strategy 2025 is ‘powered by’ digitization.",
  },
  {
    icon: <BsGiftFill className="fill-[#e8772e] text-2xl" />,
    title: "FIRST CHOICE",
    description:
      "Sea Wave Logistics has wonderful clients all over the world, and we'd like to keep it that way. That's why we ensure that we are and remain their first choice through our excellent service and through First Choice. This is our first-class improvement program that helps everyone in our organization strive forward every single day, guided by the motto: “Everybody. Everyday. Everywhere. A little bit better.”",
  },
  {
    icon: <IoGift className="text-[#e8772e] text-2xl" />,
    title: "A BIGGER WORLD",
    description:
      "Sea Wave Logistics logistics is our contribution to a more sustainable world. This is a massive challenge, which is why the Sea Wave Logistics Group has set an ambitious objective for climate protection: zero-emissions logistics by 2064. How are we going to do this?",
  },
];

const AboutHome = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-8 py-12">
      <div className="flex-1">
        <p className="text-lg text-gray-500">About us</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Our shipping solutions connect people with endless possibilities.
        </h2>
        <p className="text-lg mt-2">
          Trust Wave Logistics stands as a distinguished leader in the shipping
          and logistics industry, operating under the esteemed banner of the
          Trust Wave Logistics Group. With a comprehensive array of shipping
          solutions encompassing road, air, and rail transport, we specialize in
          facilitating seamless connections across the globe. Our commitment to
          excellence ensures dependable and efficient logistics services
          worldwide, meeting the diverse needs of our global clientele with
          precision and reliability.
        </p>
        <div className="flex flex-col gap-8 pt-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  className="w-16 border border-[#e8772e] rounded-full p-3"
                  alt=""
                />
              ) : (
                item.icon
              )}
              <div>
                <h1 className="pb-4 text-xl font-bold hover:text-[#e8772e]">
                  {item.title}
                </h1>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 pt-8 md:pt-40">
        <h2 className="text-2xl md:text-3xl font-bold">
          BE THE BOSS OF YOUR SHIPMENT
        </h2>
        <p className="text-lg mt-4">
          Our comprehensive shipping solution, My Trust Wave Logistics Parcel,
          puts you in control of all your shipments. We provide real-time
          updates at every stage of the delivery journey, starting from when
          your parcel is dispatched. Any shipping irregularities are promptly
          highlighted in our user-friendly dashboard. With a few simple clicks,
          you can generate detailed shipping reports, ensuring seamless
          integration with your logistics operations.
        </p>
        <img src={signature} alt="" className="w-40 mt-8" />
        <h1>
          <span className="text-xl font-extrabold block">Desmond Smith</span>{" "}
          <span className="text-sm">Chief Executive Officer</span>
        </h1>
      </div>
    </div>
  );
};

export default AboutHome;
