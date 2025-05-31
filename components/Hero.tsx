import Image from "next/image";
import React from "react";
import { BsHandIndexFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="flex-flex-col items-center justify-center gap-8 mx-auto">
      <div className="relative w-fit mx-auto">
        <Image
          src="/About2.jpeg"
          alt="Profile picture"
          width={400}
          height={40}
          className="rounded-full w-26 h-26 border-2 border-slate-300 flex items-center mx-auto my-12"
        />
        <span className="absolute text-yellow-700 text-2xl items-center left-18 top-19 z-10">
          <BsHandIndexFill />
        </span>
      </div>
      <article className="flex flex-col text-left items-center justify-around gap-10">
        <h1 className="text-3xl font-extrabold">
          Hello, My Name is Shirlyn Njeri
        </h1>
        <p>
          I&apos;m a passionate social media strategist with a deep
          understanding of human behavior, storytelling, and brand growth. With
          experience across multiple industries—including wellness, B2B, B2C,
          personal branding, and design—I&apos;ve helped brands of all sizes
          across the world build engaged communities, amplify their message, and
          achieve measurable success. From crafting viral content that reaches
          millions of views to developing long-term strategies that drive
          consistent growth, I specialize in turning social media into a
          powerful tool for visibility and impact
        </p>
      </article>
    </section>
  );
}
