import HeaderLogo from "./header/HeaderLogo";
import HeaderNav from "./header/HeaderNav";
import HeaderAccount from "./header/HeaderAccount";

const Header = () => {
  return (
    <header className="w-full mx-auto bg-background">
      <nav className="flex justify-between items-center px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[34px]">
        <HeaderLogo />
        <HeaderNav />
        <HeaderAccount />
      </nav>
    </header>
  );
};

export default Header;
