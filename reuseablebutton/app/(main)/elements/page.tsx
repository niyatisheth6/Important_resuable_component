import clsx from "clsx";
import Link from "next/link";
import style from "@/assets/css/home.module.css";

function ElementsPage() {
  return (
    <div className={clsx(style.elements, "main_container")}>
      <h1 className="heading">Components</h1>
      <ul>
        <li>
          <Link href="/buttons">Button</Link>
        </li>
        <li>
          <Link href="/icon-using-component">SVG icon</Link>
        </li>
        <li>
          <Link href="/profile">Profile Image</Link>
        </li>
        <li>
          <Link href="/custom">custom</Link>
        </li>
      </ul>
    </div>
  );
}

export default ElementsPage;
