import { useStore } from "../../store/store";
import SelectedCurrency from "./components/SelectedCurrency";
import DateInput from "./components/DateInput";

const MainConverter = () => {
  const { date, setDate, calendarOpen, toggleCalendar, selectedCurrency, setSelectedCurrency } = useStore();

  return (
    <main className="bg-background py-20 px-52 sm:px-10 md:px-20 lg:px-32">
      <div className="rounded bg-white min-h-[400px] py-14 px-12 sm:px-6 md:px-8 lg:px-10">
        <h3 className="text-title text-4xl font-bold leading-[1.4] sm:text-2xl md:text-3xl lg:text-4xl">Конвертер валют</h3>
        
        <p className="mt-[70px] mb-[30px] text-navigation font-roboto text-xl font-medium leading-[1.4] sm:text-lg md:text-xl">
          В мене є
        </p>
        
        <form className="flex items-center gap-4 sm:flex-col sm:gap-2 md:flex-row">
          <input type="number" className="border border-calendar w-[220px] h-[60px] py-4 text-center sm:w-full md:w-[200px] lg:w-[220px]" />
          <SelectedCurrency selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
        </form>
        
        <DateInput date={date} toggleCalendar={toggleCalendar} setDate={setDate} calendarOpen={calendarOpen} />
      </div>
    </main>
  );
};

export default MainConverter;
