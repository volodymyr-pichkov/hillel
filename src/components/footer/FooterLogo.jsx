const FooterLogo = () => {
  return (
    <div className="flex flex-col items-start gap-y-5 w-full md:w-auto">
      <div className="flex items-center gap-x-3">
        <img src="../assets/images/logo.svg" alt="Cheap Change logo" />
        <h2 className="text-title font-work text-xl font-bold">
          Чіп Чендж
        </h2>
      </div>
      <div className="text-navigation font-roboto text-xs leading-[1.4]">
        <p>04128, м.Київ, вул. Хрещатик, 19</p>
        <p>Ліцензія НБУ №156</p>
        <p>&#169; ПАТ ЧіпЧендж, 2019-2023</p>
      </div>
    </div>
  );
};

export default FooterLogo;
