import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <Image
          src="/banner_img.svg"
          alt="banner_img"
          width={600}
          height={600}
        ></Image>
      </div>
    </div>
  );
}
