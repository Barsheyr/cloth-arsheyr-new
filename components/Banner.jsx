import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 bg-[#E6E9F2] my-20 rounded-xl overflow-hidden">
      <Image className="" src={assets.watcher1} alt="jbl_soundbox_image" />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Level Up Your Style and Elegance
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive piece to precise controls—everything you need to win at
          your finger tips
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-green-600 rounded text-white">
          Buy now
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>
      <Image
        className="hidden md:block"
        src={assets.watcher2}
        alt="md_controller_image"
      />
      <Image
        className="md:hidden"
        src={assets.watcher2}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;
