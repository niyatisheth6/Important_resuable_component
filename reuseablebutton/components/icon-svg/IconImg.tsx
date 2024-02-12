"use client";
import React from "react";
import clsx from "clsx";
import style from "@/assets/css/buttons.module.css";
// import logo from "@/assets/images/icons/logo.svg";
import moon from "@/assets/images/icons/dark.svg";
import Image from "next/image";

function IconImg() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Icons</h1>
      <div className="flex flex-col gap-4">
        {/* <Image src={logo} alt="logo" /> */}
        <Image src={moon} alt="moon" />
      </div>
    </div>
  );
}

export default IconImg;
