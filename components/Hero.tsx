import Image from "next/image";
import React from "react";
import { BsHandIndex } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="flex-flex-col items-center justify-center gap-8 mx-auto">
      <div className="relative">
        <Image
          src="/About2.jpeg"
          alt="Profile picture"
          width={400}
          height={40}
          className="rounded-full w-23 h-23 border-2 border-slate-300 flex items-center mx-auto my-12"
        />
        <span className="absolute w-40 h-40 left-2 bottom-1 z-10">
          <BsHandIndex />
        </span>
      </div>
    </section>
  );
}
