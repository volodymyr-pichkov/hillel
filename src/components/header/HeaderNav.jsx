import React from "react";

const HeaderNav = () => {
  return (
    <div>
      {" "}
      {/* Добавь синюю подсветку */}
      <ul className="flex font-roboto text-nav-text space-x-5 md:space-x-10">
        <li>
          <a href="/">Послуги</a>
        </li>
        <li>
          <a href="/">Конвертер валют</a>
        </li>
        <li>
          <a href="/">Контакти</a>
        </li>
        <li>
          <a href="/">Задати питання</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
