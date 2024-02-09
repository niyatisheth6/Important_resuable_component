"use client";
import style from "@/assets/css/buttons.module.css";
import Button from "@/components/buttons/Button";
import clsx from "clsx";

function Buttonspage() {
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Buttons</h1>

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

export default Buttonspage;
