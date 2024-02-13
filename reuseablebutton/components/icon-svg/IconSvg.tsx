"use client";
import React from "react";
import clsx from "clsx";
import style from "@/assets/css/buttons.module.css";
import Time from "@/assets/images/icons/Profile.svg";
import Moon from "@/assets/images/icons/dark.svg";

function IconSvg() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Icons using as component</h1>
      <div className="flex gap-4">
        <Time />
        <Moon />
      </div>
    </div>
  );
}

export default IconSvg;
