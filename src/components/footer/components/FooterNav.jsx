import { NavLink, Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="flex flex-col font-roboto text-navigation text-xs leading-[1.4] w-full md:w-auto mt-1">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-link" : "text-navigation"
            }
          >
            Послуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/converter"
            className={({ isActive }) =>
              isActive ? "text-link" : "text-navigation"
            }
          >
            Конвертер валют
          </NavLink>
        </li>
        <li>
          <Link to="#">Контакти</Link>
        </li>
        <li>
          <Link to="#">Задати питання</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
