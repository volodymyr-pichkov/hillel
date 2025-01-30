import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto max-w-[1366px] max-h-[224px] flex justify-between items-center bg-layout-white">
      <div className="flex justify-center items-center">
        <img
          className="h-auto mt-[53px] mr-[11px] mb-[18px] ml-[101px]"
          src="../assets/images/logo.svg"
          alt="logo"
        />
        <h2 className="flex flex-col text-title-dark font-work text-xl not-italic leading-normal font-bold justify-center w-[119px] h-[14px] mt-[60px] mr-[136px] mb-[20px]">
          Чіп Чендж
        </h2>
        <div className="flex flex-col">
          <p>04128, м.Київ, вул. Хрещатик, 19</p>
          <p>Ліцензія НБУ №156</p>
          <p>&#169; ПАТ ЧіпЧендж, 2019-2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
