import React from "react";
import Product1 from "../../assets/images/product (1).jpg";
import Product2 from "../../assets/images/product (2).jpg";
import Product3 from "../../assets/images/product (3).jpg";
import Product4 from "../../assets/images/product (4).jpg";
import Product5 from "../../assets/images/product (5).jpg";
import Product6 from "../../assets/images/product (6).jpg";
import Image from "next/image";

export const Heading = () => {
  const products = [
    {
      productNo: 1,
      image: Product1,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
    {
      productNo: 2,
      image: Product2,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
    {
      productNo: 3,
      image: Product3,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
    {
      productNo: 4,
      image: Product4,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
    {
      productNo: 5,
      image: Product5,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
    {
      productNo: 6,
      image: Product6,
      title: "Product",
      des: "Description of first product",
      price: "$240.00",
    },
  ];

  return (
    <div className="px-12">
      <div className="font-bold text-[30px] mt-12">Heading</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-6"> 
        {products.map((product) => {
          return (
            <div key={product.productNo}>
              <div className="mt-6 ">
                <Image src={product.image} alt="" className="h-[240px] object-cover rounded-lg" />
              </div>
              <div className="text-[16px] font-semibold mt-4">{product.title}</div>
              <div className="text-[16px] text-[#828282]">{product.des}</div>
              <div className="text-[16px] font-semibold">{product.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
