"use client";

import Link from "next/link";
import Button from "./Button";

function Btn2() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
      <h1 className="heading mb-5">Buttons using npm package</h1>
      <Button onClick={() => alert("hi")}>Button 1</Button>
      <Button variant="danger" onClick={() => alert("hi")}>
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
      <h1 className="heading mb-5">Buttons used as link</h1>
      <Button asLink href="/profile">
        Link
      </Button>
     
    </div>
  );
}

export default Btn2;

// instal  this npm package

// npm i class-variance-authority
// npm i tailwind-merge
