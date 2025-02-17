import React from "react";
import BuissnessModalCard from "./BuissnessModalCard";

const BuissnessModalCanvas = () => {
  const data = [
    {
      title: "Identifying the right product for the right customer",
      points: [
        {
          label: "Early Adopter",
          description: "Early adopter focus in key markets",
        },
        {
          label: "Early Adopter",
          description: "Early adopter focus in key markets",
        },
        {
          label: "Market Size",
          description: "The size of the market",
        },
      ],
    },
    {
      title: "Identifying the right product for the right customer",
      points: [
        {
          label: "Early Adopter",
          description: "Early adopter focus in key markets",
        },
        {
          label: "Early Adopter",
          description: "Early adopter focus in key markets",
        },
        {
          label: "Market Size",
          description: "The size of the market",
        },
      ],
    },
  ];

  return (
    <div>
      <p className="text-xl text-white font-semibold">Buissness Model Canvas</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((card, index) => (
          <BuissnessModalCard
            key={index}
            title={card.title}
            points={card.points}
          />
        ))}
      </div>
    </div>
  );
};

export default BuissnessModalCanvas;
