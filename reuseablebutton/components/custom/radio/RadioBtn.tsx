import React from "react";
import MultiRadioBtn from "./MultiRadioBtn";
import MulticardRadioBtn from "./MulticardRadioBtn";

function RadioBtn() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
      <h1 className="heading mb-5">Radio</h1>
      <h4 className="heading-sm">1. Radio Button</h4>
      <MultiRadioBtn id="1" label="men" name="gender" />
      <MultiRadioBtn id="2" label="women" name="gender" />
      <hr />
      <h4 className="heading-sm">2. MultiCard Radio Button</h4>
      <MulticardRadioBtn id="card1" name="card" />
      <MulticardRadioBtn id="card2" name="card" />
      <MulticardRadioBtn id="card3" name="card" />
      <hr />
    </div>
  );
}

export default RadioBtn;
