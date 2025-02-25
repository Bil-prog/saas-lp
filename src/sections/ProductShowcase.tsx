'use client';

import Image from "next/image";
import productImg from "@/assets/product-image.png";
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png'
import {motion, useScroll, useTransform} from 'motion/react'
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-desc mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImg} alt="product-img" className="mt-10" />
          <motion.img src={pyramid.src} alt="pyramid" className="hidden md:block absolute -right-36 -top-32" height={262} width={262} style={{translateY}}/>
          <motion.img src={tube.src} alt="tube" height={248} width={248} className="hidden md:block absolute bottom-24 -left-36" style={{translateY}}/>
        </div>
      </div>
    </section>
  );
};
