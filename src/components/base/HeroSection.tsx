import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image
          src="/banner_img.svg"
          alt="banner_img"
          width={600}
          height={600}
        ></Image>
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Clash
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Discover the better choice, together</p>
        </div>
      </div>
    </div>
  );
}
