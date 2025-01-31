import React from "react";

const Header = () => {
  return (
    <header className="w-full max-w-[1366px] flex justify-between items-center bg-layout-white">
      <div className="flex items-center">
        <img
          className="my-[34px] ml-[100px]"
          src="/assets/images/logo.svg"
          alt="Cheap Change Logo"
        />
        <h1 className="text-title-dark font-work text-xl font-bold mt-[39px] mb-[38px] ml-3">
          Чіп Чендж
        </h1>
      </div>
      <nav>
        <ul className="flex font-roboto text-nav-text mt-[42px] mb-[38px]">
          <li className="ml-20">
            <a href="/">Послуги</a>
          </li>
          <li className="ml-[38px]">
            <a href="/" className="hover:text-link">
              Конвертер валют
            </a>
          </li>
          <li className="ml-[10px]">
            <a href="/">Контакти</a>
          </li>
          <li className="ml-[52px]">
            <a href="/">Задати питання</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <img
          className="mt-9 mb-[33px] ml-[185px]"
          src="/assets/icons/personal-account.svg"
          alt="Personal account icon"
        />
        <a
          href="/"
          className="mt-[42px] mb-[38px] ml-[15px] mr-[87px] text-title-dark font-roboto"
        >
          Особистий кабінет
        </a>
      </div>
    </header>
  );
};

export default Header;
