import { useState } from "react";
import ReservationPopup from "./ReservationPopup";
import useLessonReservation from "../../api/reservation/useLessonReservation";
import useLessonReservationCancel from "../../api/reservation/useLessonReservationCancel";
import useReservedLessonList from "../../api/reservation/useReservedLessonList";
import ReservationButton from "./ReservationButton";

interface ReservationListBoxProp {
  lessonStartAt: string;
  lessonEndAt: string;
  lessonTitle: string;
  tutorName: string;
  currentMember: number;
  maxGroupMember: number;
  userLessonSchedules: number[];
  lessonSchduleID: number;
}

const reservationId = 0;

const ReservationListBox = ({
  lessonStartAt,
  lessonEndAt,
  lessonTitle,
  tutorName,
  currentMember,
  maxGroupMember,
  userLessonSchedules,
  lessonSchduleID,
}: ReservationListBoxProp) => {
  const remainingSpots = maxGroupMember - currentMember;
  const message =
    remainingSpots === 0 ? "예약만료" : `${remainingSpots}명 남았어요`;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isReserved =
    userLessonSchedules && userLessonSchedules.includes(lessonSchduleID);

  const { mutate } = useReservedLessonList();
  const { handleReserve } = useLessonReservation();
  const { handleCancel } = useLessonReservationCancel();
  const handleReservationButton = () => {
    if (isReserved) {
      mutate(lessonSchduleID);
      setModalIsOpen(false);
      handleCancel(reservationId);
    } else if (remainingSpots === 0) {
      console.log(lessonSchduleID);
      setModalIsOpen(false);
    } else {
      mutate(lessonSchduleID);
      setModalIsOpen(false);
      handleReserve(lessonSchduleID);
    }
  };
  const handleReservationPopup = () => {
    if (isReserved) {
      setModalIsOpen(true);
    } else if (remainingSpots === 0) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(true);
    }
  };
  return (
    <div className="flex justify-between px-8 py-4 mt-4 border-2 shadow-md rounded-3xl">
      <div>
        <p className="text-xs text-[#2D62EA] font-bold ">
          {lessonStartAt.slice(11, 16)} - {lessonEndAt.slice(11, 16)}
        </p>
        <h2 className="text-base font-semibold">{lessonTitle}</h2>
        <p className="text-[10px] font-semibold text-[#434343]">
          {tutorName} 강사
        </p>
        <p className="text-[10px] font-semibold text-[#434343]">
          {message} / 정원 {maxGroupMember}
        </p>
      </div>
      <div className="flex items-center">
        <ReservationButton
          isReserved={isReserved}
          onClick={handleReservationPopup}
          remainingSpots={remainingSpots}
        />
      </div>
      <ReservationPopup
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        lessonStartAt={lessonStartAt.slice(11, 16)}
        lessonEndAt={lessonEndAt.slice(11, 16)}
        lessonTitle={lessonTitle}
        tutorName={tutorName}
        remainingSpots={remainingSpots}
        handleReservationButton={handleReservationButton}
        message={message}
        maxGroupMember={maxGroupMember}
        isReserved={isReserved}
      />
    </div>
  );
};

export default ReservationListBox;
