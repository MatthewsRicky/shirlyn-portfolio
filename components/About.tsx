"use client";

import React from "react";

import SectionHeading from "./SectionDivider";
import { motion } from "framer-motion";

import SectionDivider from "./SectionDivider";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a passionate social media strategist with a deep understanding
        of human behavior, storytelling, and brand growth. With experience
        across multiple industries—including wellness, B2B, B2C, personal
        branding, and design—I&apos;ve helped brands of all sizes across the
        world build engaged communities, amplify their message, and achieve
        measurable success. From crafting viral content that reaches millions of
        views to developing long-term strategies that drive consistent growth, I
        specialize in turning social media into a powerful tool for visibility
        and impact
      </p>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.18,
        }}
        className="flex w-[50%] justify-between mx-auto items-center"
      >
        <SectionDivider />
      </motion.div>
    </motion.section>
  );
}
