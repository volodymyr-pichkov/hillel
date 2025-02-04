import React from "react";


const Main = () => {
  return (
    <main className="w-full mx-auto">
      <div className="flex justify-between items-center bg-banner bg-cover bg-center h-[400px] px-[250px] text-white gap-x-[213px]">
        <div className="flex flex-col items-start">
          <h2>Чіп Чендж</h2>
          <p>Обмінник валют - навчальний</p>
          <button className="rounded bg-layout-white text-nav-text">
            Конвертер валют
          </button>
        </div>
        <img src="/assets/images/main-white_card.png" alt="Mastercard white" />
      </div>
    </main>
  );
};

export default Main;
