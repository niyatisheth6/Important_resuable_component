import style from "@/assets/css/home.module.css";
import Link from "next/link";
import clsx from "clsx";

function page() {
  return (
    <div className={clsx(style.elements, "main_container")}>
      <h1 className="heading">Custom</h1>
      <ul>
        <li>
          <Link href="/custom/checkbox">CheckBox</Link>
        </li>
        <li>
          <Link href="/custom/radiobtn">Radio btn</Link>
        </li>
        <li>
          <Link href="/custom/togglebtn">Toggle Btn</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
