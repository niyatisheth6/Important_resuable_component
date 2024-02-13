"use client";
import style from "@/assets/css/buttons.module.css";
import clsx from "clsx";
import Button from "./Button";

function Btn1() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Buttons using function</h1>
      <Button onClick={() => alert("hi")}>Button 1</Button>
      <Button variant="danger" size="lg" onClick={() => alert("hi")}>
        Button 2
      </Button>
      <Button
        variant="success"
        size="md"
        className="w-full"
        onClick={() => alert("hi")}
      >
        Button 3
      </Button>
      <Button
        variant="success"
        size="md"
        className="w-full"
        onClick={() => alert("hi")}
        disabled={true}
      >
        Button 4
      </Button>
    </div>
  );
}

export default Btn1;
