import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto max-w-[1366px] max-h-[224px] flex items-center bg-layout-white">
      <div className="flex flex-col justify-between items-center">
        <div className="flex items-center">
          <img
            className="mt-[53px] mr-[11px] mb-[18px] ml-[101px]"
            src="../assets/images/logo.svg"
            alt="logo"
          />
          <h2 className="flex flex-col text-title-dark font-work text-xl not-italic leading-normal font-bold justify-center w-[119px] h-[14px] mt-[60px] mr-[136px] mb-[20px]">
            Чіп Чендж
          </h2>
        </div>
        <div className="flex flex-col">
          <p>04128, м.Київ, вул. Хрещатик, 19</p>
          <p>Ліцензія НБУ №156</p>
          <p>&#169; ПАТ ЧіпЧендж, 2019-2023</p>
        </div>
      </div>

      {/*
      <nav className="flex flex-col justify-between items-center font-roboto text-nav-text not-italic font-normal leading-normal">
        <ul>
            <li><a href="#">Послуги</a></li>
            <li><a href="#">Конвертер валют</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Задати питання</a></li>
        </ul>
      </nav>

      <div className="flex flex-col">
        <div className="flex justify-center">
        <img src="../assets/icons/phone.svg" alt="phone icon" className="#" />
        <p className="#">3773</p>
        </div>
        <p className="#">Цілодобова підтримка</p>
      </div>

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
