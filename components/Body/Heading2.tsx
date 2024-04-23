import Image from "next/image";
import React from "react";
import Product2 from "../../assets/images/product (2).jpg";
import Product3 from "../../assets/images/product (3).jpg";
import Product4 from "../../assets/images/product (4).jpg";

export const Heading2 = () => {
  return (
    <div className="px-12">
      <div className="font-bold text-[30px] mt-12">Featured Heading</div>

      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 mt-8">
        <div>
          <Image
            src={Product2}
            alt=""
            className="h-[300px] sm:h-[704px] object-cover rounded-lg"
          />
          <div className="text-[16px] font-semibold mt-4">Featured Product</div>
          <div className="text-[16px] text-[#828282]">
            Description of first product
          </div>
          <div className="text-[16px] font-semibold">$240.00</div>
        </div>

        <div className="grid grid-rows-2 items-center gap-4">
          <div>
            <Image
              src={Product3}
              alt=""
              className="h-[300px] object-cover rounded-lg"
            />
            <div className="text-[16px] font-semibold mt-4">
              Featured Product
            </div>
            <div className="text-[16px] text-[#828282]">
              Description of first product
            </div>
            <div className="text-[16px] font-semibold">$240.00</div>
          </div>
          <div>
            <Image
              src={Product4}
              alt=""
              className="h-[300px] object-cover rounded-lg"
            />
            <div className="text-[16px] font-semibold mt-4">
              Featured Product
            </div>
            <div className="text-[16px] text-[#828282]">
              Description of first product
            </div>
            <div className="text-[16px] font-semibold">$240.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
