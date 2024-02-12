"use client";
import React from "react";
import clsx from "clsx";
import style from "@/assets/css/buttons.module.css";
import Logo from "@/assets/images/icons/logo.svg";
// import Moon from "@/assets/images/icons/dark.svg";

function IconSvg() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Icons</h1>
      <div className="flex flex-col gap-4">
        <Logo />
        {/* <Moon /> */}
      </div>
    </div>
  );
}

export default IconSvg;
