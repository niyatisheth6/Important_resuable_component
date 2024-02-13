"use client";
import style from "@/assets/css/buttons.module.css";
import clsx from "clsx";
import Buttons from "./Buttons";

function Btn1() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Buttons using function</h1>
      <Buttons onClick={() => alert("hi")}>Button 1</Buttons>
      <Buttons variant="danger" size="lg" onClick={() => alert("hi")}>
        Button 2
      </Buttons>
      <Buttons
        variant="success"
        size="md"
        className="w-full"
        onClick={() => alert("hi")}
      >
        Button 3
      </Buttons>
      <Buttons
        variant="success"
        size="md"
        className="w-full"
        onClick={() => alert("hi")}
        disabled={true}
      >
        Button 4
      </Buttons>
    </div>
  );
}

export default Btn1;
