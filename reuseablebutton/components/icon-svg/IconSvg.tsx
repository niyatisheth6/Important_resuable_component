"use client";
import React from "react";
import Time from "@/assets/images/icons/Profile.svg";
import Moon from "@/assets/images/icons/dark.svg";

function IconSvg() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
      <h1 className="heading mb-5">Icons using as component</h1>
      <div className="flex gap-4">
        <Time />
        <Moon />
      </div>
    </div>
  );
}

export default IconSvg;
