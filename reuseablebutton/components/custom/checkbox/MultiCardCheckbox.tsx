import React from "react";
import style from "@/assets/css/custom.module.css";
import clsx from "clsx";
type MultiCardCheckboxProps = {
  id: string;
};
function MultiCardCheckbox({ id }: MultiCardCheckboxProps) {
  return (
    <button>
      <label className={style.history_card} htmlFor={id}>
        <div>
          <h2 className="text-start">•••• •••• •••• •••• 4679</h2>
          <p className="text-start">Make Primary</p>
        </div>
        <div className={clsx(style.custom_checkbox, "!w-6 h-6")}>
          <div className="flex w-full">
            <input type="checkbox" id={id} className={style.check} />
            <span></span>
          </div>
        </div>
      </label>
    </button>
  );
}

export default MultiCardCheckbox;
