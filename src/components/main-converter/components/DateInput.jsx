import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, setDate, toggleCalendar, calendarOpen }) => {
  return (
    <div className="relative flex items-center mt-6 w-[220px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
      <input
        type="text"
        value={date ? date.toLocaleDateString() : ""}
        readOnly
        onClick={toggleCalendar}
        className="w-full py-[18px] pl-[20px] text-xl font-semibold leading-[1.4] text-navigation border border-calendar rounded font-roboto"
      />
      
      <img
        src="/assets/icons/calendar.svg"
        onClick={toggleCalendar}
        alt="Calendar"
        className="absolute right-3 w-[25px] h-[28px] cursor-pointer"
      />
      
      {calendarOpen && (
        <div className="absolute top-[calc(100%+10px)] w-full">
          <DatePicker selected={date} onChange={setDate} inline onClickOutside={toggleCalendar} />
        </div>
      )}
    </div>
  );
};

export default DateInput;
