"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import image from "@/public/assets/images/image1.jpg";
import imag2 from "@/public/assets/images/image2.jpg";
import imag3 from "@/public/assets/images/image3.jpg";
import imag4 from "@/public/assets/images/image4.jpg";
import imag5 from "@/public/assets/images/image5.jpg";

const ImageSlider = () => {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    //@ts-ignore
    setPositionIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const images = [image, imag2, imag3, imag4, imag5];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#662549] h-screen">
      {images.map((image, index) => (
        <motion.img
          key={index}
          //@ts-ignore
          src={image.src}
          className={`your-classes-here`}
          variants={imageVariants}
          initial="center"
          //@ts-ignore
          animate={{ position: positionIndex[index] }}
          transition={{ duration: 0.9 }}
          style={{ width: "50%", position: "absolute" }}
        />
      ))}

      <button className="text-white mt-[700px] w-20 h-10 rounded-xl bg-[#451952]" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
