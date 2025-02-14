import React from "react";
import Image from "next/image";
import save from "@/assets/icons/save.svg";
import star from "@/assets/icons/star.svg";
import settingsBrown from "@/assets/icons/settingsBrown.svg";
import UserChat from "./UserChat";
import InputBox from "./InputBox";
import AiChat from "./AiChat";

const Chat = () => {
  return (
    <div className="w-full max-h-full bg-tertiary rounded-lg border border-brown/5 flex flex-col ">
      <div className="flex justify-between items-center p-4 border-b-2 border-brown/10 ">
        <p className="text-lg font-semibold text-brown">
          Connecting Readers with local bookstores
        </p>

        <div className="flex items-center gap-5 ">
          <Image src={save} alt="save" className="w-6 h-6" />
          <Image src={star} alt="star" className="w-6 h-6" />
          <Image src={settingsBrown} alt="settings" className="w-6 h-6" />
        </div>
      </div>

      <div className="p-5  flex flex-col gap-4 flex-grow relative overflow-y-auto max-h-full">
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />
        <AiChat message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock" />
        <UserChat
          username="Johnny"
          message="I want to help independent bookstores compete with Amazon by connecting readers directly to the local stores that have the books they want in stock"
        />

        <InputBox placeholder="Send a message" css="sticky bottom-6 left-5 w-[calc(100%-2.5rem)]" />
      </div>
    </div>
  );
};

export default Chat;
