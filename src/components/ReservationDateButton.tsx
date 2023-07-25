import { ko } from "date-fns/locale";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelectedDate } from "../libs/useSelectedDate";

interface SetDateButtonProps {
  buttonLabel: string;
  onClick: () => void;
}

const SetDateButton = forwardRef<HTMLButtonElement, SetDateButtonProps>(
  ({ buttonLabel, onClick }, ref) => (
    <button
      className="mx-4 my-4 px-16 py-1 border-[#2D62EA] border-2 rounded-xl text-[#2D62EA] font-medium "
      onClick={onClick}
      ref={ref}
    >
      {buttonLabel}
    </button>
  )
);

const ReservationDateButton = () => {
  const { data, mutate } = useSelectedDate();

  const handleDateChange = (date: Date) => {
    mutate(date);
  };

  const getDayName = (dayNumber: number) => {
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    return dayNames[dayNumber];
  };

  const buttonLabel = `${data.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })} ${getDayName(data.getDay())}요일`;

  const years = Array.from(
    { length: new Date().getFullYear() + 1 - 2000 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <>
      <div className="text-center">
        <DatePicker
          locale={ko}
          selected={data}
          onChange={handleDateChange}
          dateFormat="yyyy. MM. dd"
          popperPlacement="auto"
          customInput={<SetDateButton buttonLabel={buttonLabel} />}
          calendarClassName="bg-white border-[#2D62EA] border-2 rounded-lg"
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-center bg-[#2D62EA] mb rounded-none">
              <span
                onClick={decreaseMonth}
                className={`mr-4 text-base font-light text-white ${
                  prevMonthButtonDisabled ? "pointer-events-none" : ""
                }`}
              >
                {"<"}
              </span>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                className="bg-[#2D62EA] text-sm text-white text-bold"
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="bg-[#2D62EA] text-sm text-white text-semibold"
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <span
                onClick={increaseMonth}
                className={`ml-4 text-base font-light text-white ${
                  nextMonthButtonDisabled ? "pointer-events-none" : ""
                }`}
              >
                {">"}
              </span>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default ReservationDateButton;
