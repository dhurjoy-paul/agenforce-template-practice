"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export default function LandingImages({
  underImage = "/image-2.png",
  topImage = "/image-1.png",
  underImageAlt = "Demo 1 for agenforce template",
  topImageAlt = "Demo 2 for agenforce template",
}) {
  return (
    // <div className="relative w-full min-h-60 sm:min-h-80 md:min-h-100 lg:min-h-120">
    <div className="relative mt-10 lg:mt-0 w-full h-[600px] lg:h-[750px]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="perspective-[2800px]"
      >
        <Image
          src={underImage}
          alt={underImageAlt}
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 mask-b-from-50% mask-r-to-50% shadow-2xl rounded-lg"
          )}
          style={{ transform: "rotateY(30deg) rotateX(40deg) rotateZ(-20deg)" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        className="perspective-[3800px] translate-x-[16%]"
        // className="perspective-[3800px] -translate-y-15 md:-translate-y-25 lg:-translate-y-35 lg:translate-x-50"
      >
        <Image
          src={topImage}
          alt={topImageAlt}
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 mask-b-from-50% mask-r-to-100% rounded-lg translate-y-[-16%]"
          )}
          style={{ transform: "rotateY(30deg) rotateX(40deg) rotateZ(-20deg)" }}
        />
      </motion.div>
    </div>
  );
}
