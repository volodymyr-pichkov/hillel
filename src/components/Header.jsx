import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[91px] bg-[#f6f7ff]">
      <div className="flex items-center">
        <img
          className="max-w-full h-auto" // #595769 и линейный градиент как применить?
          src="./assets/header/logo.png"
          alt="logo"
        />
        <h1 className="w-[112px] h-[14px] flex justify-center items-center">Чіп Чендж</h1>
      </div>
    </header>
  );
};

export default Header;
