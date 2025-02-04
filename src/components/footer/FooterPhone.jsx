const FooterPhone = () => {
  return (
    <div className="flex flex-col items-start gap-y-1.5 w-full sm:w-auto">
      <div className="flex gap-x-5 leading-[1.4]">
        <img src="../assets/icons/phone.svg" alt="Phone icon" />
        <p className="font-roboto text-base font-medium text-title">
          3773
        </p>
      </div>
      <p className="ml-[30px] text-navigation text-xs leading-[1.4]">
        Цілодобова підтримка
      </p>
    </div>
  );
};

export default FooterPhone;
