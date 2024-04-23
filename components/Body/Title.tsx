import Image from "next/image";
import React from "react";
import Cover from "../../assets/images/Cover.jpg";
import { Button } from "../ui/button";

export const Title = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute mx-12 ">
        <Image
          src={Cover}
          alt="cover"
          className="h-[400px] sm:h-[550px] object-cover rounded-[15px]"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-[400px] sm:h-[550px] gap-5">
        <div className="text-white font-bold text-[36px] sm:text-[56px] leading-none">Shop title</div>
        <div className="text-white text-[14px] sm:text-[18px] px-20 text-center">Subheading with description of your shopping site</div>
        <Button>Button</Button>
      </div>
    </div>
  );
};
