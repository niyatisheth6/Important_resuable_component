import style from "@/assets/css/custom.module.css";
import clsx from "clsx";
type MulticardRadioBtnProps = {
  id: string;
  name: string;
};
function MulticardRadioBtn({ id, name }: MulticardRadioBtnProps) {
  return (
    <button>
      <label className={style.history_card} htmlFor={id}>
        <div>
          <h2 className="text-start">•••• •••• •••• •••• 4679</h2>
          <p className="text-start">Make Primary</p>
        </div>
        <div className={clsx(style.custom_round_radio, "!w-6 h-6")}>
          <div className="flex w-full">
            <input type="radio" id={id} className={style.radio} name={name} />
            <span></span>
          </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </label>
    </button>
  );
}

export default MulticardRadioBtn;
