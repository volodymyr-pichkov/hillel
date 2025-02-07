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
    <main>
      <h3>Конвертер валют</h3>
      <p>В мене є</p>
      <form>
        <input type="number" />

        <SelectedCurrency
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </form>

      <DateInput
        date={date}
        toggleCalendar={toggleCalendar}
        setDate={setDate}
        calendarOpen={calendarOpen}
      />
    </main>
  );
};

export default MainConverter;