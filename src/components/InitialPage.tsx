"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import InputBox from "./InputBox";
import { motion, AnimatePresence } from "framer-motion";

const InitialPage = ({ setShowSearchResults }: { setShowSearchResults: (value: boolean) => void }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setShowSearchResults(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-full max-h-[100dvh-2rem] w-full bg-tertiary rounded-lg p-4 flex justify-center items-center border border-brown/5">
      <div className="w-full md:w-[600px]   ">
        <div className="flex items-center justify-center gap-4">
          <Image src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-lg font-semibold text-brown">
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
    </motion.div>
  );
};

export default InitialPage;
