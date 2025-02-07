import BannerContent from "./components/BannerContent";
import MainContent from "./components/MainContent";

const MainHome = () => {
  return (
    <main className="w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center bg-banner bg-cover bg-center bg-no-repeat h-fit min-h-[400px] px-6 md:px-[250px] gap-y-6 md:gap-x-[290px]">
        <BannerContent />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-[250px] gap-y-6 md:gap-x-[95px] h-fit min-h-[554px]">
        <MainContent />
      </div>
    </main>
  );
};

export default MainHome;
