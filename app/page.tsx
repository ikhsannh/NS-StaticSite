"use client"
import type { NextPage } from "next"
import { motion } from "framer-motion";
import { introLeftAnimation, introRightAnimation, videoAnimation, textAnimation } from "@/utils/animations";

const Home: NextPage = () => {
  return (
    <>
     <main className="grid grid-cols-[3fr_1fr] py-2">
        <h1 className="text-6xl font-bold w-[40rem] leading-[90%] tracking">
          <AnimatedWords title="Generate electricity from the sun's." />
        </h1>
        <motion.div className="text-base leading-[150%] self-end" variants={introRightAnimation}>
        We offer a clean, sustainable, 
        and reliable source of electricity that can help reduce 
        our dependence on fossil fuels.
        </motion.div>
      </main>
      <motion.video className="rounded-lg" loop autoPlay muted playsInline variants={videoAnimation}>
        <source  src="/assets/re-energy.mp4" type="video/mp4" />
      </motion.video>
    </> 
  )
}

type AnimatedWordsProps = { 
  title: string;
};

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={introLeftAnimation}>
      {title.split(" ").map((word, index) => (
        <div key={index} className="inline-block overflow-hidden">
          <motion.span className="inline-block overflow-hidden" variants={textAnimation}>{word + "\u00a0"}</motion.span>
        </div>
      ))}
    </motion.span>
  );
};


export default Home;