import FooterLogo from "./footer/FooterLogo";
import FooterNav from "./footer/FooterNav";
import FooterPhone from "./footer/FooterPhone";
import FooterPhone2 from "./footer/FooterPhone2";
import FooterNetwork from "./footer/FooterNetwork";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-background">
      <nav className="flex flex-wrap justify-between items-start px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[34px]">
        <FooterLogo />
        <FooterNav />
        <FooterPhone />
        <FooterPhone2 />
        <FooterNetwork />
      </nav>
    </footer>
  );
};

export default Footer;
