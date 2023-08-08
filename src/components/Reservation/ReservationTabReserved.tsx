import useLessonReservationList from "../../api/reservation/useLessonReservationList";
import useReservedLessonList from "../../api/reservation/useReservedLessonList";
import LoadingPage from "../../pages/LoadingPage";
import ReservationDateButton from "./ReservationDateButton";
import ReservationListBox from "./ReservationListBox";

const ReservationTabReserved = () => {
  const { exLessonReservedListData, reservedLessonIds } =
    useReservedLessonList();
  const { exLessonListData } = useLessonReservationList();

  return (
    <>
      <div className="h-[85px]">
        <ReservationDateButton />
      </div>
      <div>
        {!exLessonReservedListData ? (
          <LoadingPage />
        ) : (
          exLessonListData.schedules.map((data) => {
            if (reservedLessonIds.includes(data.id)) {
              return (
                <ReservationListBox
                  key={data.id}
                  lessonStartAt={data.startAt}
                  lessonEndAt={data.endAt}
                  lessonTitle={data.lessonTitle}
                  tutorName={data.tutorName}
                  currentMember={data.currentMember}
                  maxGroupMember={data.maxGroupMember}
                  lessonSchduleID={data.id}
                  userLessonSchedules={reservedLessonIds}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default ReservationTabReserved;
