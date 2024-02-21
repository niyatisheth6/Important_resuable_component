import SingleCheckBox from "./SingleCheckBox";
import MultiCardCheckbox from "./MultiCardCheckbox";
import MultiCheckBox from "./MultiCheckBox";
import SingleNewCheckBox from "./SingleNewCheckBox";

function Checkbox() {
  return (
    <div className="main_container flex flex-col gap-10 buttons">
      <h1 className="heading mb-5">Checkbox</h1>
      <h4 className="heading-sm">1. Single checkbox</h4>
      <SingleCheckBox />
      <h4 className="heading-sm">2. Single checkbox</h4>
      <SingleNewCheckBox />
      <hr />
      <h4 className="heading-sm">2. Multi checkbox</h4>
      <MultiCheckBox id="1" label="This is an inbox layout," />
      <MultiCheckBox id="2" label="Check one item" />
      <MultiCheckBox id="3" label="Hold down your Shift key" />
      <MultiCheckBox id="4" label="Check a lower item" />
      <MultiCheckBox
        id="5"
        label="Everything in between should also be set to checked"
      />
      <hr />
      <h4 className="heading-sm">3.MultiCard checkbox</h4>
      <MultiCardCheckbox id="6" />
      <MultiCardCheckbox id="7" />
      <MultiCardCheckbox id="8" />
      <MultiCardCheckbox id="9" />
      <hr />
    </div>
  );
}

export default Checkbox;
