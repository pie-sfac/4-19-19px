import { useState } from "react";
import Modal from "react-modal";

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
interface ReservationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  lessonStartAt: string;
  lessonEndAt: string;
  lessonTitle: string;
  tutorName: string;
  message: string;
  maxGroupMember: number;
  handleReservation: () => void;
  remainingSpots: number;
  isReserved: boolean;
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
}: ReservationPopupProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { background: "rgba(0, 0, 0, 0.80)" },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "10px",
          outline: "none",
          padding: "30px",
          width: "320px",
          height: "140px",
        },
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-around">
          <div>
            <p className="text-xs text-[#2D62EA] font-bold">
              {lessonStartAt} - {lessonEndAt}
            </p>
            <h2 className="text-base font-bold">{lessonTitle}</h2>
          </div>
          <div className="text-[#434343] text-[10px] font-semibold ">
            <p>{tutorName} 강사</p>
            <p>
              {message} / 정원 {maxGroupMember}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleReservation}
            className={
              isReserved
                ? "bg-[#434343] text-white rounded-2xl w-[100px] h-[35px] text-xs"
                : remainingSpots === 0
                ? "bg-white text-[#434343] border-[#B4B4B4] border rounded-2xl w-[100px] h-[35px] text-xs"
                : "bg-[#2D62EA] text-white rounded-2xl w-[100px] h-[35px] text-xs  "
            }
          >
            {isReserved
              ? "취소하기"
              : remainingSpots === 0
              ? "대기하기"
              : "예약하기"}
          </button>
        </div>
      </div>
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
}: ReservationListBoxProp) => {
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
    <div className="flex justify-between px-8 py-4 mt-4 border-2 shadow-md rounded-3xl">
      <div>
        <p className="text-xs text-[#2D62EA] font-bold ">
          {lessonStartAt} - {lessonEndAt}
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
        <button
          onClick={handleReservation}
          className={
            isReserved
              ? "bg-[#434343] text-white rounded-2xl w-[80px] h-[35px] text-xs"
              : remainingSpots === 0
              ? "bg-white text-[#434343] border-[#B4B4B4] border rounded-2xl w-[80px] h-[35px] text-xs"
              : "bg-[#2D62EA] text-white rounded-2xl w-[80px] h-[35px] text-xs  "
          }
        >
          {isReserved
            ? "취소하기"
            : remainingSpots === 0
            ? "대기하기"
            : "예약하기"}
        </button>
      </div>
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
