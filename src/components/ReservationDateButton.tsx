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
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());

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

  const handlePrevMonthClick = () => {
    const newActiveMonth = activeMonth - 1;
    if (newActiveMonth < 0) {
      setActiveYear(activeYear - 1);
      setActiveMonth(11); // 11은 12월을 나타냄
    } else {
      setActiveMonth(newActiveMonth);
    }
  };

  const handleNextMonthClick = () => {
    const newActiveMonth = activeMonth + 1;
    if (newActiveMonth > 11) {
      setActiveYear(activeYear + 1);
      setActiveMonth(0); // 0은 1월을 나타냄
    } else {
      setActiveMonth(newActiveMonth);
    }
  };

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
          filterDate={(date) => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            const selectedYear = date.getFullYear();
            const selectedMonth = date.getMonth();

            return (
              (selectedYear === currentYear &&
                selectedMonth === currentMonth) ||
              (selectedYear === activeYear && selectedMonth === activeMonth)
            );
          }}
          onMonthChange={(date) => {
            setActiveMonth(date.getMonth());
          }}
          onYearChange={(date) => {
            setActiveYear(date.getFullYear());
          }}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-center bg-[#2D62EA] mb-1 rounded-none">
              <span
                onClick={() => {
                  if (activeMonth === 0 && activeYear === 2000) {
                    null;
                  } else {
                    decreaseMonth();
                    handlePrevMonthClick();
                  }
                }}
                className={`mr-4 text-base font-light text-white ${
                  prevMonthButtonDisabled ? "pointer-events-none" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="19"
                  viewBox="0 0 30 48"
                  fill={
                    activeMonth === 0 && activeYear === 2000
                      ? "#2D62EA"
                      : "white"
                  }
                >
                  <path
                    d="M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z"
                    fill={
                      activeMonth === 0 && activeYear === 2000
                        ? "#2D62EA"
                        : "white"
                    }
                  />
                </svg>
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
                onClick={() => {
                  if (
                    activeMonth === 11 &&
                    activeYear === new Date().getFullYear()
                  ) {
                    null;
                  } else {
                    increaseMonth();
                    handleNextMonthClick();
                  }
                }}
                className={`ml-4 text-base font-light text-white ${
                  nextMonthButtonDisabled ? "pointer-events-none" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="19"
                  viewBox="0 0 30 48"
                  fill={
                    activeMonth === 11 &&
                    activeYear === new Date().getFullYear()
                      ? "#2D62EA"
                      : "white"
                  }
                >
                  <path
                    d="M0 42.36L18.32 24L0 5.64L5.64 0L29.64 24L5.64 48L0 42.36Z"
                    fill={
                      activeMonth === 11 &&
                      activeYear === new Date().getFullYear()
                        ? "#2D62EA"
                        : "white"
                    }
                  />
                </svg>
              </span>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default ReservationDateButton;
