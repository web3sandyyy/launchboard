import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const AiChat = ({
  message,
}: {
  message: string;
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo"
          className="w-7 h-7 "
        />
        <p className="text-lg font-semibold text-primary">Omni</p>
      </div>

      <p className="text-sm text-brown ml-9 mt-2 font-ubuntu">{message}</p>
    </div>
  );
};

export default AiChat;
