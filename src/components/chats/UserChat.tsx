import React from "react";
import user from "@/assets/icons/user.svg";
import Image from "next/image";

const UserChat = ({
  username = "You",
  message,
}: {
  username?: string;
  message: string;
}) => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
          <Image src={user} alt="user" className="w-7 h-7  mx-2" />
        <p className="text-lg font-semibold text-white">{username}</p>
      </div>

      <p className=" text-white ml-9 font-ubuntu">{message}</p>
    </div>
  );
};

export default UserChat;
