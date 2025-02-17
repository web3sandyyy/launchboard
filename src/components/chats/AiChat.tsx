import React from "react";
import Image from "next/image";
import bulb from "@/assets/icons/bulb.svg";

const AiChat = ({ message }: { message: string }) => {
  return (
    <div className="bg-blackOne rounded-lg p-4 flex flex-col gap-2 ">
      <div className="flex items-center gap-2">
        <div className="logo-gradient  rounded-full p-2 flex items-center justify-center w-fit ">
          <Image src={bulb} alt="bulb" className="w-7 h-7" />
        </div>
        <p className="text-lg font-semibold text-white">Omni</p>
      </div>

      <p className=" text-white ml-9 font-ubuntu">{message}</p>
    </div>
  );
};

export default AiChat;
