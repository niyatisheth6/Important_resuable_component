import clsx from "clsx";
import React from "react";
import style from "@/assets/css/custom.module.css";

function MultiCheckBox({ id, label }: { id: string; label: string }) {
  return (
    <div className={clsx(style.custom_checkbox)}>
      <label htmlFor={id} className="flex w-full">
        <input type="checkbox" id={id} className={style.check} />
        <span></span>
        <p className="checkbox_title cursor-pointer">{label}</p>
      </label>
    </div>
  );
}

export default MultiCheckBox;
