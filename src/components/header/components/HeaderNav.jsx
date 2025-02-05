import { NavLink, Link } from "react-router-dom";

const HeaderNav = (/*{direction}*/) => {
  //row
  //column
  // ClassNames library
  return (
    <div>
      <ul className="flex font-roboto text-navigation space-x-5 md:space-x-10">
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

export default HeaderNav;
