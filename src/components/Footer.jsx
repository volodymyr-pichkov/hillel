import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto max-w-[1366px] max-h-[224px] flex items-center bg-layout-white">

      <div className="flex flex-col items-center">

        <div className="flex">
          <img
            className="#"
            src="../assets/images/logo.svg"
            alt="logo"
          />
          <h2 className="flex flex-col text-title-dark font-work text-xl leading-normal font-bold justify-center">
            Чіп Чендж
          </h2>
        </div>

        <div className="flex flex-col justify-center text-nav-text font-roboto text-xs leading-[1.4]">
          <p>04128, м.Київ, вул. Хрещатик, 19</p>
          <p>Ліцензія НБУ №156</p>
          <p>&#169; ПАТ ЧіпЧендж, 2019-2023</p>
        </div>

      </div>

      
      <nav className="flex flex-col justify-center font-roboto text-nav-text leading-normal space-y-5">

        <ul>
            <li className="#"><a href="#" >Послуги</a></li>
            <li className="#"><a href="#" >Конвертер валют</a></li>
            <li className="#"><a href="#" >Контакти</a></li>
            <li className="#"><a href="#" >Задати питання</a></li>
        </ul>

      </nav>

      <div className="flex flex-col">

        <div className="flex justify-center">
        <img src="../assets/icons/phone.svg" alt="phone icon" className="#" />
        <p className="flex flex-col justify-center font-roboto text-base font-medium leading-[1.4] text-title-dark">3773</p>
        </div>

        <p className="flex flex-col justify-center text-nav-text text-xs leading-[1.2]">Цілодобова підтримка</p>

      </div>
      
{/*
      <div className="flex flex-col">
        <div className="flex justify-center">
        <img src="../assets/icons/handset.svg" alt="phone icon" className="#" />
        <p className="#">8 800 111 22 33</p>
        </div>
        <p className="#">Безкожтовно для дзвінків в межах України</p>
      </div>
*/}
      
      
    </footer>
  );
};

export default Footer;
