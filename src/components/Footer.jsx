import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-layout-white">
      <nav className="flex flex-wrap justify-between items-start px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[34px]">
        <div className="flex flex-col items-start gap-y-5 w-full md:w-auto">
          <div className="flex items-center gap-x-3">
            <img src="../assets/images/logo.svg" alt="Cheap Change logo" />
            <h2 className="text-title-dark font-work text-xl font-bold">
              Чіп Чендж
            </h2>
          </div>
          <div className="text-nav-text font-roboto text-xs leading-[1.4]">
            <p>04128, м.Київ, вул. Хрещатик, 19</p>
            <p>Ліцензія НБУ №156</p>
            <p>&#169; ПАТ ЧіпЧендж, 2019-2023</p>
          </div>
        </div>

        <div className="flex flex-col font-roboto text-nav-text text-xs leading-[1.4] w-full md:w-auto mt-1">
          <ul className="space-y-2">
            <li>
              <a href="#">Послуги</a>
            </li>
            <li>
              <a href="#">Конвертер валют</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
            <li>
              <a href="#">Задати питання</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-y-1.5 w-full sm:w-auto">
          <div className="flex gap-x-5 leading-[1.4]">
            <img src="../assets/icons/phone.svg" alt="Phone icon" />
            <p className="font-roboto text-base font-medium text-title-dark">
              3773
            </p>
          </div>
          <p className="ml-[30px] text-nav-text text-xs leading-[1.4]">Цілодобова підтримка</p>
        </div>

        <div className="flex flex-col items-start w-full sm:w-auto">
          <div className="flex items-center gap-x-4">
            <img src="../assets/icons/handset.svg" alt="Phone icon" />
            <p className="text-title-dark font-roboto font-medium leading-[1.4]">8 800 111 22 33</p>
          </div>
          <p className="text-nav-text text-xs leading-[1.4] mt-2.5 ml-8">Безкоштовно для дзвінків</p>
          <p className="text-nav-text text-xs leading-[1.4] mt-2.5 ml-8">в межах України</p>
        </div>

        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
          <img src="../assets/icons/network.svg" alt="Social network" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
