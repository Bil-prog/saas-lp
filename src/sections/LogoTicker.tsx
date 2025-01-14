'use client';

import acme from "@/assets/logo-acme.png";
import quantum from "@/assets/logo-quantum.png";
import echo from "@/assets/logo-echo.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
import Image from "next/image";
import {motion} from 'motion/react'

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div className="flex gap-14 flex-none pr-14"
        animate={{translateX: "-50%"}}
        transition={{duration: 20, repeat: Infinity, ease:"linear", repeatType:"loop"}}
        >
          <Image src={acme} alt="acme" className="logo-ticker-img" />
          <Image src={quantum} alt="acme" className="logo-ticker-img" />
          <Image src={echo} alt="acme" className="logo-ticker-img" />
          <Image src={celestial} alt="acme" className="logo-ticker-img" />
          <Image src={pulse} alt="acme" className="logo-ticker-img" />
          <Image src={apex} alt="acme" className="logo-ticker-img" />
          {/* second set */}
          <Image src={acme} alt="acme" className="logo-ticker-img" />
          <Image src={quantum} alt="acme" className="logo-ticker-img" />
          <Image src={echo} alt="acme" className="logo-ticker-img" />
          <Image src={celestial} alt="acme" className="logo-ticker-img" />
          <Image src={pulse} alt="acme" className="logo-ticker-img" />
          <Image src={apex} alt="acme" className="logo-ticker-img" />
        </motion.div>
      </div>
    </div>
    </div>
  );
};
