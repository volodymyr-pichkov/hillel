import FooterLogo from "./components/FooterLogo";
import FooterNav from "./components/FooterNav";
import FooterPhone from "./components/FooterPhone";
import FooterContacts from "./components/FooterContacts";
import FooterNetwork from "./components/FooterNetwork";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-background">
      <nav className="flex flex-wrap justify-between items-start px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[34px]">
        <FooterLogo />
        <FooterNav />
        <FooterPhone />
        <FooterContacts />
        <FooterNetwork />
      </nav>
    </footer>
  );
};

export default Footer;
