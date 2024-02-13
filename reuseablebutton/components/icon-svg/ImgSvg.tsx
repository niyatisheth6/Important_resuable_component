"use client";
import React from "react";
import clsx from "clsx";
import style from "@/assets/css/buttons.module.css";
import man from "@/assets/images/man.png";
import mobile from "@/assets/images/mobile.svg?url";
import Image from "next/image";

function ImgSvg() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Icons using as image</h1>
      <div className="flex gap-4">
        <Image src={man} alt="man" width={200} height={200} />
        <Image src={mobile} alt="wrong" width={200} height={200} />
      </div>
    </div>
  );
}

export default ImgSvg;
