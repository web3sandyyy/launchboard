"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputBox from "./InputBox";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const InitialPage = ({
  setShowSearchResults,
}: {
  setShowSearchResults: (value: boolean) => void;
}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setShowSearchResults(true);
  };

  const suggestion = [
    "How to create a food delivery using which we can make money",
    "How to create a food delivery using which we can make money",
    "How to create a food delivery using which we can make money",
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-full w-full md:w-4/5 lg:w-3/5 bg-blackTwo mx-auto p-4 flex justify-center items-center"
    >
      <div className="w-full -mt-8">
        <div className="md:w-[600px] mx-auto ">
          <div className="flex items-center justify-center gap-4">
              <Image src={logo} alt="bulb" className="w-10 h-10" />
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              What would you like to create?
            </p>
          </div>

          <InputBox
            placeholder="Describe your idea or the problem you want to solve..."
            value={search}
            onChangeFunction={(value) => setSearch(value)}
            onSubmitFunction={handleSubmit}
          />
        </div>

        <div className="mt-8   grid grid-cols-3 gap-4">
          {suggestion.map((suggestion, index) => (
            <p key={index} className="p-4 rounded-lg bg-blackOne text-white border-2 border-white/5">
              {suggestion}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InitialPage;
