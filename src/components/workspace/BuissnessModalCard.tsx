import React from "react";

type point = {
  label: string;
  description: string;
};

type BuissnessModalCardProps = {
  title: string;
  points: point[];
};

const BuissnessModalCard = ({ title, points }: BuissnessModalCardProps) => {
  return (
    <div className="p-4 bg-blackOne rounded-lg text-white">
      <p className="text-lg font-semibold ">{title}</p>

      {points && points.length > 0 && (
        <div className="flex flex-col gap-3 text-sm mt-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-blackThree hover:bg-white/10 hover:shadow-md shadow-brown duration-200  "
            >
              <p className=" font-semibold text-orange ">{point.label}</p>
              <p className=" mt-2">{point.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuissnessModalCard;
