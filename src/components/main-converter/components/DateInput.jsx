import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, setDate }) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleCalendar = () => setCalendarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex items-center mt-6 w-[220px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
      <input
        type="text"
        value={date ? date.toLocaleDateString() : ""}
        readOnly
        onClick={toggleCalendar}
        className="w-full py-4 pl-5 text-xl font-semibold leading-[1.4] text-navigation border border-calendar rounded font-roboto cursor-pointer"
        aria-label="Select date"
      />

      <img
        src="/assets/icons/calendar.svg"
        onClick={toggleCalendar}
        alt="Open calendar"
        className="absolute right-3 w-6 h-7 cursor-pointer"
        role="button"
      />

      {calendarOpen && (
        <div className="absolute top-full mt-2 w-full z-10 bg-white shadow-lg rounded">
          <DatePicker
            selected={date}
            onChange={(selectedDate) => {
              setDate(selectedDate);
              setCalendarOpen(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;