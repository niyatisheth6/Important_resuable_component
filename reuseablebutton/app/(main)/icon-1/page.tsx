import clsx from "clsx";
import style from "@/assets/css/buttons.module.css";
import { CopyAiIcon } from "@/components/icons/Icon";

function page() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Icons</h1>
      <div className="flex flex-col gap-4">
        <h4 className="text-3xl">Icons passing props</h4>
        <CopyAiIcon isDisabled={true} />
        <h4 className="text-3xl">Icons Without passing props</h4>
        <CopyAiIcon />
      </div>
    </div>
  );
}

export default page;
