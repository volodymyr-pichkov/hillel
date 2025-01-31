import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1366px] flex justify-between items-center bg-layout-white">
      
        <div className="flex flex-col">
          <div className="flex">
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

        <nav className="font-roboto text-nav-text text-xs leading-normal space-y-5">
          <ul>
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
        </nav>

        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <img src="../assets/icons/phone.svg" alt="Phone icon" />
            <p className="font-roboto text-base font-medium text-title-dark">
              3773
            </p>
          </div>
          <p className="text-nav-text text-xs">Цілодобова підтримка</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <img src="../assets/icons/handset.svg" alt="Phone icon" />
            <p>8 800 111 22 33</p>
          </div>
          <p>Безкоштовно для дзвінків в межах України</p>
        </div>

        <div className="flex">
          <img src="../assets/icons/network.svg" alt="Social network" />
        </div>

    </footer>
  );
};

export default Footer;
