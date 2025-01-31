import React from "react";

const Header = () => {
  return (
    <header className="w-full h-auto max-w-[1366px] max-h-[91px] flex justify-between items-center bg-layout-white">
      <div className="flex justify-center">
        <img
          className="mt-[34px] mb-[34px] ml-[100px]"
          src="../assets/images/logo.svg"
          alt="logo"
        />
        <h1 className="flex flex-col text-title-dark font-work text-xl  leading-normal font-bold justify-center w-[112px] h-[14px] mt-[39px] ml-[12px] mb-[38px]">Чіп Чендж</h1>
      </div>
      <nav>
        <ul className="flex font-roboto text-nav-text leading-normal ml-[80px]">
          <li className="flex flex-col justify-center w-[71px] h-[11px] mt-[42px] mb-[38px]"><a href="#">Послуги</a></li>
          <li className="flex flex-col justify-center w-[174px] h-[11px] mt-[42px] ml-[38px] mb-[38px]"><a href="#" className="hover:text-link">Конвертер валют</a></li>
          <li className="flex flex-col justify-center w-[74px] h-[11px] mt-[42px] ml-[10px] mb-[38px]"><a href="#">Контакти</a></li>
          <li className="flex flex-col justify-center w-[169px] h-[11px] mt-[42px] ml-[52px] mb-[38px]"><a href="#">Задати питання</a></li>
        </ul>
      </nav>
      <div className="flex ml-[185px]">
      <a href="#"><img className="mt-[36px] mb-[33px]" src="../assets/icons/personal-account.svg" alt="personal account" /> </a>
      <a href="#" className="flex items-center font-roboto leading-normal w-[144px] h-[11px] ml-[15px] mt-[42px] mr-[87px] mb-[38px]">Особистий кабінет</a>
      </div>
    </header>
  );
};

export default Header;
