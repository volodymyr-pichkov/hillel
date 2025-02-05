import { NavLink } from "react-router-dom";

const BannerContent = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-reverse space-y-5">
        <h2 className="text-background font-roboto text-[54px] font-bold">
          Чіп Чендж
        </h2>
        <p className="text-grey font-roboto text-sm font-medium">
          Обмінник валют - навчальний
        </p>
        <NavLink to="/converter" className="flex items-center justify-center rounded bg-background w-[234px] h-[53px] text-navigation font-roboto font-medium text-lg">
          Конвертер валют
        </NavLink>
      </div>
      <div className="bg-gray-200 bg-opacity-50 bg-cover bg-no-repeat bg-center">
        <img
          src="/assets/images/main-white_card.png"
          alt="Mastercard white"
          className="w-full h-auto min-w-[341px] min-h-[216px]"
        />
      </div>
    </>
  );
};

export default BannerContent;
