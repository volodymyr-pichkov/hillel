import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ date, toggleCalendar, setDate, calendarOpen }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={date ? date.toLocaleDateString() : ""}
          readOnly
          onClick={toggleCalendar}
        />
        <FaRegCalendarAlt onClick={toggleCalendar} />
      </div>
      {calendarOpen && (
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          inline
          onClickOutside={toggleCalendar}
        />
      )}
    </div>
  );
};

export default DateInput;
