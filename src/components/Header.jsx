import React from "react";

const Header = () => {
  return (
    <header className="w-full max-w-[1366px] h-full max-h-[91px] flex justify-between items-center bg-[#f6f7ff]">
      <div className="flex justify-center items-center">
        <img
          className="max-w-full h-auto mt-[34px] mr-[12px] mb-[34px] ml-[100px]"
          src="../assets/images/logo.svg"
          alt="logo"
        />
        <h1 className="flex flex-col text-title-dark font-work text-xl not-italic leading-normal font-bold justify-center max-w-full max-h-full w-[112px] h-[14px] mt-[39px] mr-[80px] mb-[38px]">Чіп Чендж</h1>
      </div>
      <nav>
        <ul className="flex justify-between items-center font-roboto text-nav-text not-italic font-normal leading-normal">
          <li className="flex flex-col justify-center max-w-full max-h-full w-[71px] h-[11px] mt-[42px] mr-[38px] mb-[38px]"><a href="#">Послуги</a></li>
          <li className="flex flex-col justify-center max-w-full max-h-full w-[174px] h-[11px] mt-[42px] mr-[10px] mb-[38px]"><a href="#" className="hover:text-link">Конвертер валют</a></li>
          <li className="flex flex-col justify-center max-w-full max-h-full w-[74px] h-[11px] mt-[42px] mr-[52px] mb-[38px]"><a href="#">Контакти</a></li>
          <li className="flex flex-col justify-center max-w-full max-h-full w-[169px] h-[11px] mt-[42px] mr-[185px] mb-[38px]"><a href="#">Задати питання</a></li>
        </ul>
      </nav>
      <div className="flex items-center">
      <img className="max-w-full h-auto mt-[36px] mr-[15px] mb-[33px]" src="../assets/icons/personal-account.svg" alt="personal account" />
      <a href="#" className="mt-[42px] mr-[87px] mb-[38px]">Особистий кабінет</a>
      </div>
    </header>
  );
};

export default Header;
