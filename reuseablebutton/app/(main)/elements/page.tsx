import clsx from "clsx";
import Link from "next/link";
import style from "@/assets/css/home.module.css";

function ElementsPage() {
  return (
    <div className={clsx(style.elements, "container")}>
      <h1 className="heading">Components</h1>
      <ol>
        <li>
          <Link href="/buttons">Button</Link>
        </li>
        <li>
          <Link href="/buttons-new">Button using npm package</Link>
        </li>
      </ol>
    </div>
  );
}

export default ElementsPage;