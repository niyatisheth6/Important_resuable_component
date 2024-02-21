import clsx from "clsx";
import style from "@/assets/css/custom.module.css";
import Link from "next/link";

function SingleCheckBox() {
  return (
    <div className={clsx(style.custom_checkbox)}>
      <label htmlFor="checkbox" className="flex w-full">
        <input type="checkbox" id="checkbox" className={style.check} />
        <span></span>
        <p className="checkbox_title cursor-pointer">
          I agree to TopFrog.ai{" "}
          <Link href="#" className="text-prussianblue font-bold">
            Terms
          </Link>{" "}
          &{" "}
          <Link href="#" className="text-prussianblue font-bold">
            Privacy Policy
          </Link>
        </p>
      </label>
    </div>
  );
}

export default SingleCheckBox;
