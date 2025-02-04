import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <img
        className="mr-[10px] md:mr-[12px]"
        src="/assets/images/logo.svg"
        alt="Cheap Change Logo"
      />
      <h1 className="text-title-dark font-work text-xl font-bold">Чіп Чендж</h1>
    </div>
  );
};

export default HeaderLogo;
