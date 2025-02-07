import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, setDate, toggleCalendar, calendarOpen }) => {
  return (
    <div>
      <input
        type="text"
        value={date ? date.toLocaleDateString() : ""}
        readOnly
        onClick={toggleCalendar}
      />
      <FaRegCalendarAlt onClick={toggleCalendar} />

      {calendarOpen && (
        <DatePicker
          selected={date}
          onChange={setDate}
          inline
          onClickOutside={toggleCalendar}
        />
      )}
    </div>
  );
};

export default DateInput;