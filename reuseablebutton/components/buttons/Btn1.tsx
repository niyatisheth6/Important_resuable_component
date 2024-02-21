"use client";

import Buttons from "./Buttons";

function Btn1() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
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
      <h1 className="heading mb-5">Buttons used as link</h1>
      <Buttons asLink href="/profile">
        Link
      </Buttons>
      <hr />
    </div>
  );
}

export default Btn1;
