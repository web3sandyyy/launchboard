import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import question from "@/assets/icons/question.svg";
import file from "@/assets/icons/file.svg";
import plus from "@/assets/icons/plus.svg";
import settings from "@/assets/icons/settings.svg";

const Sidebar = () => {
  return (
    <div className="min-h-full min-w-fit p-4 bg-blackThree flex md:flex-col items-center justify-between md:border-r-2 border-b-2 border-blackOne relative">
      <div className="flex md:flex-col gap-3 items-center">
        <a className="hidden md:inline" href="/">
          <Image src={logo} alt="logo" className="w-10 h-10 " />
        </a>

        <div className="bg-orange rounded-lg p-2 flex items-center justify-center w-fit active:bg-orange/80 group">
          <Image
            src={plus}
            alt="plus"
            className="w-6 h-6 rounded-full border-2 border-white p-1 group-hover:border-none group-hover:scale-110 duration-200 transition-all"
          />
        </div>
      </div>

      <a className="md:hidden absolute left-1/2 -translate-x-1/2" href="/">
        <Image src={logo} alt="logo" className="w-10 h-10 " />
      </a>

      <div className="flex md:flex-col gap-4 md:gap-6">
        <Image src={settings} alt="settings" className="w-5 h-5 hover:cursor-pointer hover:scale-110 duration-200 active:opacity-80 " />
        <Image
          src={question}
          alt="question"
          className="w-5 h-5 border-2  border-white rounded-full  hover:scale-110 duration-200 active:opacity-80"
        />
        <Image src={file} alt="file" className="w-5 h-5  hover:scale-110 duration-200 active:opacity-80" />
      </div>
    </div>
  );
};

export default Sidebar;
