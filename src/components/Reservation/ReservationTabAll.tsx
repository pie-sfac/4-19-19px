import { useState } from "react";
import useLessonReservationList from "../../api/reservation/useLessonReservationList";
import useReservedLessonList from "../../api/reservation/useReservedLessonList";
import { useSelectedDate } from "../../libs/useSelectedDate";
import ReservationDateButton from "./ReservationDateButton";
import LoadingPage from "../../pages/LoadingPage";
import ReservationListBox from "./ReservationListBox";

const ReservationTabAll = () => {
  const { exLessonListData } = useLessonReservationList();
  const { reservedLessonIds } = useReservedLessonList();
  const { data } = useSelectedDate();
  const [showReservable, setShowReservable] = useState<boolean>(false);

  const handleToggleReservable = () => {
    setShowReservable((prev) => !prev);
  };
  return (
    <>
      <div className="h-[85px]">
        <ReservationDateButton />
        <div className="flex justify-end text-xs font-semibold ">
          <button
            onClick={handleToggleReservable}
            className={showReservable ? "text-[#2D62EA] " : "text-[#7c7c7c] "}
          >
            {showReservable ? "예약 가능한 강의" : "예약 가능한 강의"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              className="inline-block ml-1"
            >
              <path
                d="M1.175 0.408325L5 4.23333L8.825 0.408325L10 1.59166L5 6.59166L0 1.59166L1.175 0.408325Z"
                fill={showReservable ? "#2D62EA" : "#7c7c7c"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {!exLessonListData ? (
          <LoadingPage />
        ) : (
          exLessonListData.schedules.map((lessonData) => {
            const startAt = new Date(lessonData.reservationStartAt);
            const endAt = new Date(lessonData.reservationEndAt);
            if (startAt <= data && data <= endAt) {
              if (
                !showReservable ||
                (lessonData.currentMember < lessonData.maxGroupMember &&
                  !reservedLessonIds.includes(lessonData.id))
              ) {
                return (
                  <ReservationListBox
                    key={lessonData.id}
                    lessonStartAt={lessonData.startAt}
                    lessonEndAt={lessonData.endAt}
                    lessonTitle={lessonData.lessonTitle}
                    tutorName={lessonData.tutorName}
                    currentMember={lessonData.currentMember}
                    maxGroupMember={lessonData.maxGroupMember}
                    lessonSchduleID={lessonData.id}
                    userLessonSchedules={reservedLessonIds}
                  />
                );
              }
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default ReservationTabAll;
