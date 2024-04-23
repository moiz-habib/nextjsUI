import React from "react";
import { Button } from "../ui/button";
import { IoIosMenu } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="flex justify-between px-12 py-10 items-center">
      <div className="font-black text-[40px] font-serif">Kicks.</div>
      <IoIosMenu className="sm:hidden"/>
      <div className="hidden sm:flex gap-6">
        <Button variant={"link"}>page</Button>
        <Button variant={"link"}>page</Button>
        <Button variant={"link"}>page</Button>
        <Button variant={"default"}>Button</Button>
      </div>
    </div>
  );
};
