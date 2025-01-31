import React from "react";

const Main = () => {
  return (
    <main>
      <img
        src="/assets/images/main-banner.png"
        alt="Banner"
        className="relative"
      />
      <img
        src="/assets/images/main-white_card.png"
        alt="Mastercard"
        className="absolute top-[176px] left-[774px]"
      />
      <div>
        <h2 className="absolute top-[206px] left-[250px]">Чіп Чендж</h2>
        <p className="absolute top-[268px] left-[250px]">
          Обмінник валют - навчальний
        </p>
        <button className="absolute top-[313px] left-[250px] rounded bg-layout-white w-[234px] h-[53px]">
          Конвертер валют
        </button>
      </div>
      <div className="bg-background-white">
      <div>
        <h3>
        Конвертер валют
        </h3>
        <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
        <button className="bg-link rounded bg-layout-white w-[251px] h-[60px]">
          <p className="text-background-white">Конвертувати валюту</p>
        </button>
      </div>
      <img src="/assets/images/main-black_card.jpg" alt="Mastercard" />
      </div>
    </main>
  );
};

export default Main;
