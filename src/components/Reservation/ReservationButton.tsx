interface ReservationButtonProp {
  isReserved: boolean;
  onClick: () => void;
  remainingSpots: number;
}

const ReservationButton = ({
  isReserved,
  onClick,
  remainingSpots,
}: ReservationButtonProp) => {
  return (
    <button
      onClick={onClick}
      className={
        isReserved
          ? "bg-[#434343] text-white rounded-2xl w-[80px] h-[35px] text-xs"
          : remainingSpots === 0
          ? "bg-white text-[#434343] border-[#B4B4B4] border rounded-2xl w-[80px] h-[35px] text-xs"
          : "bg-[#2D62EA] text-white rounded-2xl w-[80px] h-[35px] text-xs  "
      }
    >
      {isReserved ? "취소하기" : remainingSpots === 0 ? "대기하기" : "예약하기"}
    </button>
  );
};

export default ReservationButton;
