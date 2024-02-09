"use client";
import Link from "next/link";
import style from "@/assets/css/home.module.css";
import clsx from "clsx";

export default function Home() {
  console.log("hii");

  return (
    <div className={clsx(style.home, "container")}>
      <h1 className="heading">React js / Next js</h1>
      <p className={style.subHeading}>Reusable Components</p>
      <Link href="/elements" className={style.btn}>
        Click Me
      </Link>
    </div>
  );
}
