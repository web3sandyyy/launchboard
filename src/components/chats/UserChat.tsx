import React from "react";
import user from "@/assets/icons/user.svg";
import Image from "next/image";

const UserChat = ({
  username = "User",
  message,
}: {
  username: string;
  message: string;
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <Image
          src={user}
          alt="user"
          className="p-1 w-7 h-7 bg-rose-900 opacity-70 rounded-md"
        />
        <p className="text-lg font-semibold text-primary">{username}</p>
      </div>

      <p className="text-sm text-brown ml-9 mt-2 font-ubuntu">{message}</p>
    </div>
  );
};

export default UserChat;
