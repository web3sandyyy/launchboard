import React, { useState } from "react";
import Image from "next/image";
import search from "@/assets/icons/search.svg";
import { motion, AnimatePresence } from "framer-motion";

const WorkspaceChat = ({
  title,
  researchType,
  keyPoints,
  showKeyConsiderations = true,
}: {
  title: string;
  researchType: string;
  keyPoints: string[];
  showKeyConsiderations: boolean;
}) => {
  const [showPoints, setShowPoints] = useState<boolean>(showKeyConsiderations);

  return (
    <div
      className="bg-secondary rounded-lg p-4 border-2 border-primary/30"
      onClick={() => setShowPoints(!showPoints)}
    >
      <div className="flex  gap-2">
        <p className="text-lg font-semibold text-primary flex-grow">{title}</p>

        <div className="flex items-center gap-1 w-fit border-2 border-primary rounded-full p-1 px-3 min-w-fit h-fit">
          <Image src={search} alt="search" className="w-4 h-4" />
          <p className="text-primary text-sm">{researchType}</p>
        </div>
      </div>
      <AnimatePresence>
        {keyPoints && showPoints && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-rose-950 opacity-70 text-sm font-semibold mt-6 font-ubuntu uppercase">
              key considerations
            </p>

            <div className="flex flex-col gap-2 mt-4 font-ubuntu">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <div className="border-2 border-brown/50 p-[2px] h-fit rounded-full mt-[0.5rem]"></div>

                  <p className="text-brown ">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkspaceChat;
