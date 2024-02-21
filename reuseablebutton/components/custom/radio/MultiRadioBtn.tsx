import style from "@/assets/css/custom.module.css";
import clsx from "clsx";

function MultiRadioBtn({
  id,
  label,
  name,
}: {
  id: string;
  label: string;
  name: string;
}) {
  return (
    <div className={clsx(style.custom_radio)}>
      <label htmlFor={id} className="flex w-full">
        <input type="radio" id={id} className={style.radio} name={name} />
        <span></span>
        <p className="checkbox_title cursor-pointer">{label}</p>
      </label>
    </div>
  );
}

export default MultiRadioBtn;
