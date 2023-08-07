import { useState } from "react";
import Modal from "react-modal";
import { useUserReservationData } from "../libs/useUserReservationData";
import useLessonReservation from "../api/reservation/useLessonReservation";
import useLessonReservationCancel from "../api/reservation/useLessonReservationCancel";

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
  handleReservationButton: () => void;
  remainingSpots: number;
  isReserved: boolean;
}

const reservationId = 0;
const ReservationPopup = ({
  isOpen,
  onClose,
  lessonStartAt,
  lessonEndAt,
  lessonTitle,
  tutorName,
  message,
  maxGroupMember,
  handleReservationButton,
  remainingSpots,
  isReserved,
}: ReservationPopupProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="flex items-center justify-center h-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80"
      closeTimeoutMS={900}
    >
      <div className="flex flex-col w-[320px] bg-white p-5 rounded-lg shadow-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-3 ml-auto"
          onClick={onClose}
        >
          <path
            d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289Z"
            fill="black"
          />
        </svg>
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
            onClick={handleReservationButton}
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

  const { data: userReservationData, mutate } = useUserReservationData();
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
        handleReservationButton={handleReservationButton}
        message={message}
        maxGroupMember={maxGroupMember}
        isReserved={isReserved}
      />
    </div>
  );
};

export default ReservationListBox;
