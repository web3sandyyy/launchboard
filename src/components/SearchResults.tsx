"use client";
import React, { useState } from "react";
import Chat from "./chats/Chat";
import Workspace from "./workspace/Workspace";
import { motion } from "framer-motion";
const SearchResults = () => {
  const [selectedTab, setSelectedTab] = useState("Chat");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full  max-h-[100dvh] bg-blackThree"
    >
      <div className="text-white text-lg relative flex lg:hidden">
        <p
          className="w-full text-center p-2 relative z-10"
          onClick={() => setSelectedTab("Chat")}
        >
          Chat
        </p>
        <p
          className="w-full text-center p-2 relative z-10"
          onClick={() => setSelectedTab("Workspace")}
        >
          Workspace
        </p>
        <div
          className={`absolute bottom-0 left-0 w-1/2 bg-orange h-full rounded-md duration-200 ${
            selectedTab === "Chat" ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 max-h-[calc(100dvh-118px)] md:max-h-[calc(100dvh-44px)] lg:max-h-full h-full ">
        <Chat isSelected={selectedTab === "Chat"} />
        <Workspace isSelected={selectedTab === "Workspace"} />
      </div>
    </motion.div>
  );
};

export default SearchResults;
