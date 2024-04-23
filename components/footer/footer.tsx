import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div>
      <div className="mt-16 px-12">
        <Separator />
      </div>
      <div className="flex flex-col sm:flex sm:flex-row items-center justify-evenly">
        <div className="flex flex-col p-12  gap-y-10">
          <div className="text-[#828282] font-serif text-[40px]">Kicks.</div>
          <div className="flex gap-2 ">
            <FaFacebook size={20} color="#828282" />
            <FaLinkedin size={20} color="#828282" />
            <FaYoutube size={20} color="#828282" />
            <FaInstagram size={20} color="#828282" />
          </div>
        </div>
        <div className="mb-10 grid grid-cols-3 grid-rows-4 sm:mb-0">
          <Button className="font-bold text-[#828282]" variant={"link"}>
            Topic
          </Button>
          <Button className="font-bold text-[#828282]" variant={"link"}>
            Topic
          </Button>
          <Button className="font-bold text-[#828282]" variant={"link"}>
            Topic
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
          <Button className="text-[#828282]" variant={"link"}>
            page
          </Button>
        </div>
      </div>
    </div>
  );
};
