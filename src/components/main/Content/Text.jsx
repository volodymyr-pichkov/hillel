const Text = () => {
  return (
    <div className="flex flex-col items-start space-y-reverse space-y-5">
      <h2 className="text-background font-roboto text-[54px] font-bold">Чіп Чендж</h2>
      <p className="text-grey font-roboto text-sm font-medium">Обмінник валют - навчальний</p>
      <button className="rounded bg-background w-[12vw] h-[5vh] text-navigation text-center font-roboto font-medium text-lg">
        Конвертер валют
      </button>
    </div>
  );
};

export default Text;
