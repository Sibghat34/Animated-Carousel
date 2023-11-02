'use client'

import React from 'react'
import {useState} from 'react';
import {motion} from 'framer-motion';

import image from '@/public/assets/images/image1.jpg';
import imag2 from '@/public/assets/images/image2.jpg';
import imag3 from '@/public/assets/images/image3.jpg';
import imag4 from '@/public/assets/images/image4.jpg';
import imag5 from '@/public/assets/images/image5.jpg';


const ImageSlider = () => {

    const [positonIndexs, setPositonIndexs] = useState([0, 1, 2, 3, 4]);


    const handelNext = () => {
        setPositonIndexs((preIndex) => {
            const updatedIndex = preIndex.map((preIndex) => (preIndex +1) % 5);
            return updatedIndex;
        });
    } 

    const images = [
        image,
        imag2,
        imag3,
        imag4,
        imag5
    ]

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1',
    ]

    const imageVarience = {
        center: {x: '0%', scale: 1, zIndex: 5},
        left1: {x: '-50%', scale: 0.7, zIndex: 2},
        left: {x: '-90%', scale: 0.5, zIndex: 1},
        right: {x: '90%', scale: 0.5, zIndex: 1},
        right1: {x: '50%', scale: 0.7, zIndex: 2},
    }

  return (
    <div className='flex flex-col items-center justify-start h-full w-full'>
        {images.map((image, index) =>(
            <motion.img
            key={index}
            src= {image.src}
            alt= ''
            className={'rounded-2xl'}
            initial= 'center'
            animate= {positions[positonIndexs[index]]}
            variants={imageVarience}
            transition={{duration: 0.8}}
            style={{width: '40%', position: 'absolute'}}
            />
        ))}
        <button className='text-black rounded-lg py-2 px-4 mt-[500px] bg-[#183D3D]' onClick={handelNext}>Next</button>
    </div>
    
  )
}

export default ImageSlider