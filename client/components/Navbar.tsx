"use client";
import React from "react";
import { Button } from "./ui/button";
import { Menu, Bell, Sun, Settings } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <Button
          className="px-3 py-3 rounded-full hover:bg-blue-500"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </Button>
      
      <div className="relative">
        <Input
          type="search"
          placeholder="Enter item you want to search"
          className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-500 bg-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Bell className="text-gray-500" size={20} />
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5 ">
          <div>
            <Button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24} />
            </Button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute top-2 right-2 inline-flex items-center px-[0.4rem] py-1 text-xs font-semibold">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">
              <Image />
            </div>
            <span className="font-semibold">Name</span>
          </div>
        </div>
        <Link href="/seeting">
        <Settings className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
