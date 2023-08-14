import useSWR from "swr";

const exLessonReservedListData = {
  reservations: [
    {
      id: 0,
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lesson: {
        id: 0,
        type: "SINGLE",
        title: "필라테스 초급",
        duration: 60,
        maxGroupMember: 4,
        currentMember: 1,
        reservationStartAt: "2023-08-06T05:59:34.831Z",
        reservationEndAt: "2023-08-010T00:50:00.831Z",
        tutorName: "홍길동",
      },
    },
    {
      id: 1,
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lesson: {
        id: 1,
        type: "SINGLE",
        title: "필라테스 초급1",
        duration: 60,
        maxGroupMember: 4,
        currentMember: 1,
        reservationStartAt: "2023-08-06T05:59:34.831Z",
        reservationEndAt: "2023-08-010T00:50:00.831Z",
        tutorName: "홍길동",
      },
    },
  ],
};

const reservedLessonIds =
  exLessonReservedListData?.reservations.map(
    (reservation) => reservation.lesson.id
  ) || [];
interface Lesson {
  id: number;
  type: string;
  title: string;
  duration: number;
  maxGroupMember: number;
}
interface Reservations {
  id: number;
  startAt: string;
  endAt: string;
  lesson: Lesson;
}

interface ReservedLesson {
  reservations: Reservations[];
}

const useReservedLessonList = () => {
  const { data, error, isLoading, mutate } = useSWR<ReservedLesson>(
    "http://223.130.161.221/mapi/v1/lesson-reservations"
  );
  const handleMutate = (value: number) => {
    const index = reservedLessonIds.indexOf(value);
    if (index === -1) {
      reservedLessonIds.push(value);
    } else {
      reservedLessonIds.splice(index, 1);
    }
    return mutate();
  };
  return {
    data,
    error,
    isLoading,
    exLessonReservedListData,
    reservedLessonIds,
    mutate: handleMutate,
  };
};
export default useReservedLessonList;
