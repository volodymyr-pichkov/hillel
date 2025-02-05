import { Link } from "react-router-dom";

const HeaderAccount = () => {
  return (
    <div className="flex items-center">
      <img
        className="mr-[10px] md:mr-[15px]"
        src="/assets/icons/account.svg"
        alt="Personal account icon"
      />
      <Link to="#" className="text-title font-roboto text-sm md:text-base">
        Особистий кабінет
      </Link>
    </div>
  );
};

export default HeaderAccount;
