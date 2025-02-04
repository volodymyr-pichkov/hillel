import React from "react";

const Header = () => {
  return (
    <header className="w-full mx-auto bg-layout-white">
      <nav className="flex justify-between items-center px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[34px]">
        <div className="flex items-center">
          <img
            className="mr-[10px] md:mr-[12px]"
            src="/assets/images/logo.svg"
            alt="Cheap Change Logo"
          />
          <h1 className="text-title-dark font-work text-xl font-bold">
            Чіп Чендж
          </h1>
        </div>

        <div> {/* Добавь синюю подсветку */}
          <ul className="flex font-roboto text-nav-text space-x-5 md:space-x-10">
            <li>
              <a href="/">Послуги</a>
            </li>
            <li>
              <a href="/">
                Конвертер валют
              </a>
            </li>
            <li>
              <a href="/">Контакти</a>
            </li>
            <li>
              <a href="/">Задати питання</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <img
            className="mr-[10px] md:mr-[15px]"
            src="/assets/icons/personal-account.svg"
            alt="Personal account icon"
          />
          <a
            href="/"
            className="text-title-dark font-roboto text-sm md:text-base"
          >
            Особистий кабінет
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
