const FooterNav = () => {
  return (
    <div className="flex flex-col font-roboto text-navigation text-xs leading-[1.4] w-full md:w-auto mt-1">
      <ul className="space-y-2">
        <li>
          <a href="#">Послуги</a>
        </li>
        <li>
          <a href="#">Конвертер валют</a>
        </li>
        <li>
          <a href="#">Контакти</a>
        </li>
        <li>
          <a href="#">Задати питання</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
