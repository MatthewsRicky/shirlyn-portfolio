"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";

import SubmitBtn from "./Submitbutton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-slate-700 dark:text-slate-50/80 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline font-semibold"
          href="matthewsrickypro@gmail.com"
        >
          matthewsrickypro@gmail.com{" "}
        </a>
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent succefully");
        }}
      >
        <input
          id="email"
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg border borderBlack p-4 dark:text-slate-950 dark:bg-slate-50 dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          id="text"
          name="senderMessage"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:text-slate-950 dark:bg-slate-50 dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none"
          placeholder="Your Message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
