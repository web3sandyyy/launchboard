"use client";
import React from "react";
import Image from "next/image";
import upload from "@/assets/icons/upload.svg";
import send from "@/assets/icons/send.svg";

const InputBox = ({
  placeholder,
  css,
  isUpload = true,
  isSend = true,
  value,
  onChangeFunction,
  onSubmitFunction,
}: {
  placeholder: string;
  css?: string;
  isUpload?: boolean;
  isSend?: boolean;
  value?: string;
  onChangeFunction?: (value: string) => void;
  onSubmitFunction?: () => void;
}) => {
  return (
    <div className={`bg-blackThree  rounded-lg p-6 mt-5 ${css}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFunction?.();
        }}
        className="flex items-start gap-2 "
      >
        <textarea
          placeholder={placeholder}
          className="w-full p-2 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-white/70 resize-none overflow-wrap-break-word min-h-[40px] text-white"
          rows={1}
          style={{ overflow: "hidden" }}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            onChangeFunction?.(e.target.value);
          }}
          value={value}
        />

        {isSend && (
          <button type="submit" className="">
            <Image
              src={send}
              alt="send"
              className="p-1 w-8 h-8 min-w-8 min-h-8 mt-1 rounded-md bg-orange duration-200  active:bg-orange/80"
            />
          </button>
        )}

        {isUpload && (
          <Image
            src={upload}
            alt="upload"
            className="p-1 w-8 h-8 min-w-8 min-h-8 mt-1 rounded-md bg-blackOne  active:bg-blackOne/80
              transition-all duration-200"
          />
        )}
      </form>
    </div>
  );
};

export default InputBox;
