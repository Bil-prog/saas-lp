import Image from "next/image";
import productImg from "@/assets/product-image.png";
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png'

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
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
          <Image src={pyramid} alt="pyramid" className="hidden md:block absolute -right-36 -top-32" height={262} width={262}/>
          <Image src={tube} alt="tube" height={248} className="hidden md:block absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  );
};
