"use client";
import React from "react";
import Image from "next/image";
import settings from "@/assets/icons/settings.svg";
import buissness from "@/assets/icons/buissness.svg";
import technical from "@/assets/icons/technical.svg";
import marketing from "@/assets/icons/market.svg";  
import WorkspaceChat from "./ResearchCard";
import { useState } from "react";
import BuissnessModalCanvas from "./BuissnessModalCanvas";

const Workspace = () => {
  const [selected, setSelected] = useState("Buissness");
  const options = [
    {
      name: "Buissness",
      icon: buissness,
    },
    {
      name: "Technical",
      icon: technical,
    },
    {
      name: "Marketing",
      icon: marketing,
    },
  ];

  return (
    <div className="w-full max-h-full bg-blackTwo flex flex-col ">
      <div className="flex justify-between items-center p-4 border-b-2 border-blackOne ">
        <p className="text-lg font-semibold text-white">Workspace</p>

        <div className="flex items-center gap-5 ">
          <Image src={settings} alt="settings" className="w-6 h-6" />
        </div>
      </div>

      <div className="p-5 pt-4  flex flex-col gap-4 flex-grow relative overflow-y-auto max-h-full">
        <div className="flex gap-2">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 cursor-pointer p-2 px-4 rounded-lg duration-200 text-white ${
                selected === option.name ? "bg-orange" : "bg-blackOne"
              }`}
              onClick={() => setSelected(option.name)}
            >
              <Image src={option.icon} alt={option.name} width={24} height={24} className="w-6 h-6" />
              <p
                className={` ${
                  selected === option.name ? "font-semibold " : "font-normal "
                } duration-200`}
              >
                {option.name}
              </p>
            </div>
          ))}
        </div>

        <BuissnessModalCanvas />
      </div>
    </div>
  );
};

export default Workspace;
