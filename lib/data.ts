import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
//import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/social-media-mgt.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LEAD SOCIAL MEDIA STRATEGIST & MANAGER - IRANIC DIGITAL",
    description:
      "I lead a team in curating content that not only captivates audiences but also drives measurabl results—whether it’s increased  brand awareness, community engagement, or sales conversions. From crafting viral content that reaches millions to analyzing performance data and adapting strategies, I ensure that we stay ahead of trends and maximize their social media potential.",
    tags: ["Optimization", "Analytics", "Content Creation"],
    imageUrl: rmtdevImg,
  },
  {
    title: "LEAD SOCIAL MEDIA STRATEGIST & MANAGER - NIGHTCLUB@NOON",
    description:
      "I led the digital marketing strategy that helped sellout this daytime, sober dance party in Chicago andbuild a vibrant, engaged community. Through a mix of organic content, ads, trend-drivenmarketing, and community engagement, I crafted astrategy that sparked excitement and drove ticketsales. By leveraging Instagram, TikTok, and strategiccollaborations, we positioned Nightclub at Noon as afresh, high-energy alternative to traditional nightlife.",
    tags: ["Marketing", "Engagement", "Ads", "Night Club At Noon"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SOCIAL MEDIA MANAGER - T-FLOAT",
    description:
      "I led the digital marketing strategy that helped sellout this daytime, sober dance party in Chicago and build a vibrant, engaged community.Through a mix of organic content, ads, trend-driven markeing, and community engagement, I crafted a strategy that sparked excitement and drove ticketsales. By leveraging Instagram, TikTok, and strategic collaborations, we positioned Nightclub at Noon as afresh, high-energy alternative to traditional nightlife.",
    tags: ["Strategy", "Development", "Social Media Management"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SOCIAL MEDIA MANAGER - TELEBU COMMUNICATIONS",
    description:
    "As the social media manger for Telebu, a B2B commiunication solutions company, I led the LinkedIn first content strategy, positioning the brand and its c-suite executives as thought leaders inthe industry. Grew the page to over 21K followers",
    tags: ["Marketing", "Engagement", "Followers", "Telebu"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "Social Media Strategy & Growth",
  "Paid & Organic Growth",
  "Content Creation &Optimization",
  "Analytics & Otptimization",
  "Graphics Design & Storytelling",
  "Trend Spotting & Adaptation",
] as const;
