import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const AiChat = ({ message }: { message: string }) => {
  return (
    <div className="bg-blackOne rounded-lg p-4 flex flex-col gap-2 ">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="bulb" className="w-7 h-7" />
        <p className="text-lg font-semibold text-white">Omni</p>
      </div>

      <p className=" text-white ml-9 font-ubuntu">{message}</p>
    </div>
  );
};

export default AiChat;
