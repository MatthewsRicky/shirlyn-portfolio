import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-gray-500 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-slate-700 dark:bg-opacity-10 dark:text-gray-200"
    >
      <>
        Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
      </>
    </button>
  );
}
