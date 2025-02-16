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
    <div className="p-4 bg-secondary rounded-lg border-2 border-brown/10">
      <p className="text-lg font-semibold text-primary ">{title}</p>

      {points && points.length > 0 && (
        <div className="flex flex-col gap-3 text-sm mt-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-tertiary hover:bg-secondary hover:shadow-md shadow-brown duration-200 border-2 border-brown/10"
            >
              <p className="text-rose-900 opacity-70 font-semibold">
                {point.label}
              </p>
              <p className="text-primary mt-2">{point.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuissnessModalCard;
