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
    <div
      className={`bg-secondary shadow-lg shadow-brown/20 rounded-lg p-6 border border-brown/20 mt-5 ${css}`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFunction?.();
        }}
        className="flex items-start gap-2 "
      >
        <textarea
          placeholder={placeholder}
          className="w-full p-2 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-black/50 resize-none overflow-wrap-break-word min-h-[40px]"
          rows={1}
          style={{ overflow: "hidden" }}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            onChangeFunction?.(e.target.value);
          }}
          value={value}
        />

        {isUpload && (
          <Image
            src={upload}
            alt="upload"
            className="p-1 w-8 h-8 opacity-50 mt-3 rounded-full hover:bg-brown/20 hover:opacity-70 transition-all duration-200"
          />
        )}

        {isSend && (
          <button type="submit" className="">
            <Image
              src={send}
              alt="send"
              className="p-1 w-8 h-8 opacity-50 mt-3 rounded-full hover:bg-brown/20 hover:opacity-70 transition-all duration-200"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default InputBox;
