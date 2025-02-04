import { NavLink } from "react-router-dom";

const TextBanner = () => {
  return (
    <div className="flex flex-col items-start space-y-reverse space-y-5">
      <h2 className="text-background font-roboto text-[54px] font-bold">Чіп Чендж</h2>
      <p className="text-grey font-roboto text-sm font-medium">Обмінник валют - навчальний</p>
      <NavLink to="/converter">
      <button className="rounded bg-background w-[234px] h-[53px] text-navigation text-center font-roboto font-medium text-lg">
        Конвертер валют
      </button>
      </NavLink>
    </div>
  );
};

export default TextBanner;
