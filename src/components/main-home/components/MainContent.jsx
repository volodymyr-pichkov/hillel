import { NavLink } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-6 text-center md:text-left">
        <h3 className="text-title font-roboto text-3xl md:text-4xl font-bold leading-[1.4]">
          Конвертер валют
        </h3>
        <div className="flex flex-col items-start space-y-2">
          <p className="text-navigation font-roboto text-lg md:text-xl leading-[1.4]">
            Переважна діяльність банківської
          </p>
          <p className="text-navigation font-roboto text-lg md:text-xl leading-[1.4]">
            групи за останні чотири звітні квартали
          </p>
          <p className="text-navigation font-roboto text-lg md:text-xl leading-[1.4]">
            становить 50 і більше відсотків.
          </p>
        </div>
        <NavLink to="/converter" className="flex items-center justify-center rounded bg-link w-[220px] md:w-[251px] h-[55px] md:h-[60px] text-background font-roboto font-medium text-lg leading-[1.4]">
          Конвертувати валюту
        </NavLink>
      </div>
      <div className="rounded bg-gray-200 bg-opacity-50 bg-cover bg-no-repeat bg-center">
        <img
          src="/assets/images/main-black_card.jpg"
          alt="Mastercard white"
          className="w-full h-auto min-w-[320px] md:min-w-[436px] min-h-[250px] md:min-h-[314px]"
        />
      </div>
    </>
  );
};

export default MainContent;
