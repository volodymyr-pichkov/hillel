import { NavLink } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-6">
        <h3 className="text-title font-roboto text-4xl font-bold leading-[1.4]">
          Конвертер валют
        </h3>
        <div className="flex flex-col items-start space-y-2">
          <p className="text-navigation font-roboto text-xl leading-[1.4]">
            Переважна діяльність банківської{" "}
          </p>
          <p className="text-navigation font-roboto text-xl leading-[1.4]">
            групи за останні чотири звітні квартали
          </p>
          <p className="text-navigation font-roboto text-xl leading-[1.4]">
            становить 50 і більше відсотків.
          </p>
        </div>
        <NavLink to="/converter">
          <button className="rounded bg-link w-[251px] h-[60px] text-background text-center font-roboto font-medium text-lg leading-[1.4]">
            Конвертувати валюту
          </button>
        </NavLink>
      </div>
      <div className="rounded bg-gray-200 bg-opacity-50 bg-cover bg-no-repeat bg-center">
        <img
          src="/assets/images/main-black_card.jpg"
          alt="Mastercard white"
          className="w-full h-auto min-w-[436px] min-h-[314px]"
        />
      </div>
    </>
  );
};

export default MainContent;
