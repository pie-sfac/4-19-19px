import { useState } from "react";
import Modal from "react-modal";

interface Prop {
  lessonStartAt: string;
  lessonEndAt: string;
  lessonTitle: string;
  tutorName: string;
  currentMember: number;
  maxGroupMember: number;
  userLessonSchedules: [];
  lessonSchduleID: number;
}

const ReservationPopup = ({
  isOpen,
  onClose,
  lessonStartAt,
  lessonEndAt,
  lessonTitle,
  tutorName,
  message,
  maxGroupMember,
  handleReservation,
  remainingSpots,
  isReserved,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose}>Modal Close</button>
      <div>
        <p>
          {lessonStartAt} - {lessonEndAt}
        </p>
        <h2>{lessonTitle}</h2>
        <p>{tutorName} 강사</p>
        <span>
          {message} / 정원 {maxGroupMember}
        </span>
      </div>
      <button onClick={handleReservation}>
        {isReserved
          ? "취소하기"
          : remainingSpots === 0
          ? "대기하기"
          : "예약하기"}
      </button>
    </Modal>
  );
};

const ReservationListBox = ({
  lessonStartAt,
  lessonEndAt,
  lessonTitle,
  tutorName,
  currentMember,
  maxGroupMember,
  userLessonSchedules,
  lessonSchduleID,
}: Prop) => {
  const remainingSpots = maxGroupMember - currentMember;
  const message =
    remainingSpots === 0 ? "예약만료" : `${remainingSpots}명 남았어요`;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isReserved =
    userLessonSchedules && userLessonSchedules.includes(lessonSchduleID);

  const handleReservation = () => {
    if (isReserved) {
      setModalIsOpen(true);
    } else if (remainingSpots === 0) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <div>
      <div>
        <p>
          {lessonStartAt} - {lessonEndAt}
        </p>
        <h2>{lessonTitle}</h2>
        <p>{tutorName} 강사</p>
        <span>
          {message} / 정원 {maxGroupMember}
        </span>
      </div>
      <button onClick={handleReservation}>
        {isReserved
          ? "취소하기"
          : remainingSpots === 0
          ? "대기하기"
          : "예약하기"}
      </button>
      <ReservationPopup
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        lessonStartAt={lessonStartAt}
        lessonEndAt={lessonEndAt}
        lessonTitle={lessonTitle}
        tutorName={tutorName}
        remainingSpots={remainingSpots}
        handleReservation={handleReservation}
        message={message}
        maxGroupMember={maxGroupMember}
        isReserved={isReserved}
      />
    </div>
  );
};

export default ReservationListBox;
