import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, setDate, toggleCalendar, calendarOpen }) => {
  return (
    <div className="flex items-center mt-6 ml-[65px] mb-[55px] mr-[389px] relative w-[220px]">
<input
  type="text"
  value={date ? date.toLocaleDateString() : ""}
  readOnly
  onClick={toggleCalendar}
  className="rounded border border-calendar text-navigation font-roboto font-semibold  leading-[1.4] text-xl w-full py-[18px] pl-[20px]"
/>
      <img
      src="/assets/icons/calendar.svg"
        onClick={toggleCalendar}
        className="cursor-pointer absolute right-0 mr-[17px] w-[25px] h-[28px] text-calendar my-[17px]"
        alt="Calendar"
      />

      {calendarOpen && (
        <div className="absolute w-full top-[calc(100%+10px)]">
          <DatePicker
            selected={date}
            onChange={setDate}
            inline
            onClickOutside={toggleCalendar}
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
