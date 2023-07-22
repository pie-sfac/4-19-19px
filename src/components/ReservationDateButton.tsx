import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ReservationDateButton = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const getKoreanDayName = (dayNumber) => {
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    return dayNames[dayNumber];
  };

  const buttonLabel = `${selectedDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })} ${getKoreanDayName(selectedDate.getDay())}요일`;

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleCalendar}>{buttonLabel}</button>
      {showCalendar && (
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          formatShortWeekday={(locale, date) => {
            return getKoreanDayName(date.getDay());
          }}
        />
      )}
    </div>
  );
};

export default ReservationDateButton;
