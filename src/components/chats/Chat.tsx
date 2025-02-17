import React from "react";
import Image from "next/image";
import save from "@/assets/icons/save.svg";
import star from "@/assets/icons/star.svg";
import settings from "@/assets/icons/settings.svg";
import UserChat from "./UserChat";
import InputBox from "../InputBox";
import AiChat from "./AiChat";

const Chat = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div
      className={`w-full overflow-y-auto bg-blackTwo flex flex-col flex-grow ${
        isSelected ? "" : "hidden lg:flex"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b-2 border-blackOne ">
        <p className="text-lg font-semibold text-white">
          Connecting Readers with local bookstores
        </p>

        <div className="flex items-center gap-5 ">
          <Image src={save} alt="save" className="w-6 h-6" />
          <Image src={star} alt="star" className="w-6 h-6" />
          <Image src={settings} alt="settings" className="w-6 h-6" />
        </div>
      </div>

      <div className="p-2 flex flex-col gap-4 flex-grow relative overflow-y-auto">
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />

        <InputBox
          placeholder="Send a message"
          css="sticky bottom-6 md:bottom-4 left-4 w-[calc(100%-2rem)]"
        />
      </div>
    </div>
  );
};

export default Chat;
