"use client";
import React from "react";
import Image from "next/image";
import settingsBrown from "@/assets/icons/settingsBrown.svg";
import buissness from "@/assets/icons/buissness.svg";
import technical from "@/assets/icons/technical.svg";
import marketing from "@/assets/icons/market.svg";
import buissnessSelected from "@/assets/icons/buissnessGreen.svg";
import technicalSelected from "@/assets/icons/technicalGreen.svg";
import marketingSelected from "@/assets/icons/marketGreen.svg";

import { useState } from "react";

const Workspace = () => {
  const [selected, setSelected] = useState("Buissness");
  const options = [
    {
      name: "Buissness",
      icon: buissness,
      selectedIcon: buissnessSelected,
    },
    {
      name: "Technical",
      icon: technical,
      selectedIcon: technicalSelected,
    },
    {
      name: "Marketing",
      icon: marketing,
      selectedIcon: marketingSelected,
    },
  ];

  return (
    <div className="w-full max-h-full bg-tertiary rounded-lg border border-brown/5 flex flex-col ">
      <div className="flex justify-between items-center p-4 border-b-2 border-brown/10 ">
        <p className="text-lg font-semibold text-brown">Workspace</p>

        <div className="flex items-center gap-5 ">
          <Image src={settingsBrown} alt="settings" className="w-6 h-6" />
        </div>
      </div>

      <div className="p-5 pt-4  flex flex-col gap-4 flex-grow relative overflow-y-auto max-h-full">
        <div className="flex gap-6">
          {
            options.map((option, index) => (
              <div key={index} className={`flex items-center gap-2 opacity-70 cursor-pointer p-2 rounded-lg ${selected === option.name ? "shadow-lg" : ""}`} onClick={() => setSelected(option.name)}>
                <Image src={selected === option.name ? option.selectedIcon : option.icon} alt={option.name} className="w-6 h-6" />
                <p className={` ${selected === option.name ? "font-semibold text-primary" : "font-normal text-brown"}`}>{option.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Workspace;
