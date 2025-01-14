import { ArrowRight } from "lucide-react";
import star from '@/assets/star.png'
import spring from '@/assets/spring.png'
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-desc mt-5">
          Celebrate the joy of accoplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <Image src={star} alt="star" className="absolute -left-[350px] -top-[137px]" width={360}/>
        <Image src={spring} alt="spring" className="absolute -right-[331px] -top-[19px]" width={360}/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
