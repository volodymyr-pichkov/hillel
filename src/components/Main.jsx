import BannerContent from "./main/BannerContent";
import MainContent from "./main/MainContent";

const Main = () => {
  return (
    <main className="w-full mx-auto">
      <div
        className="flex justify-center items-center bg-banner bg-cover bg-center bg-no-repeat 
      h-fit min-h-[400px] px-[250px] gap-x-[290px]"
      >
        <BannerContent />
      </div>
      <div className="flex justify-center items-center px-[250px] gap-x-[100px] h-fit min-h-[554px]">
        <MainContent />
      </div>
    </main>
  );
};

export default Main;
