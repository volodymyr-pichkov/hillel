import { useStore } from "../../store/store";
import SelectedCurrency from "./components/SelectedCurrency";
import DateInput from "./components/DateInput";

const MainConverter = () => {
  const {
    date,
    setDate,
    calendarOpen,
    toggleCalendar,
    selectedCurrency,
    setSelectedCurrency,
  } = useStore();

  return (
    <main className="bg-background py-20 px-52">
      <div className="rounded bg-white min-h-[400px] py-14">
        <h3 className="mr-[434px] ml-[48px] text-title text-4xl font-bold leading-[1.4]">
          Конвертер валют
        </h3>
        <div>
          <p className="mt-[70px] ml-[65px] mr-[258px] mb-[30px] text-navigation font-roboto text-xl font-medium leading-[1.4]">
            В мене є
          </p>
          <form className="flex items-center ml-[65px]">
            <input
              type="number"
              className="border border-calendar w-[220px] h-[60px] py-4 text-center"
            />
            <div className="ml-4">
              <SelectedCurrency
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
            </div>
          </form>
          <DateInput
            date={date}
            toggleCalendar={toggleCalendar}
            setDate={setDate}
            calendarOpen={calendarOpen}
          />
        </div>
      </div>
    </main>
  );
};

export default MainConverter;
