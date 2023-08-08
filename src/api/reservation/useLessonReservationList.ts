import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";

const exLessonListData = {
  schedules: [
    {
      id: 0,
      lessonTitle: "필라테스 초급",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 1,
      reservationStartAt: "2023-08-06T05:59:34.831Z",
      reservationEndAt: "2023-08-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
    {
      id: 1,
      lessonTitle: "필라테스 초급1",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 1,
      reservationStartAt: "2023-08-06T05:59:34.831Z",
      reservationEndAt: "2023-08-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
    {
      id: 2,
      lessonTitle: "필라테스 초급2",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 2,
      reservationStartAt: "2023-08-06T05:59:34.831Z",
      reservationEndAt: "2023-08-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
    {
      id: 3,
      lessonTitle: "필라테스 초급3",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 3,
      reservationStartAt: "2023-08-06T05:59:34.831Z",
      reservationEndAt: "2023-08-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
    {
      id: 4,
      lessonTitle: "필라테스 초급4",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 4,
      reservationStartAt: "2023-08-06T05:59:34.831Z",
      reservationEndAt: "2023-08-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
    {
      id: 5,
      lessonTitle: "필라테스 초급5",
      lessonType: "SINGLE",
      startAt: "2023-08-08T07:00:00.000Z",
      endAt: "2023-08-08T08:00:00.000Z",
      lessonDuration: 60,
      maxGroupMember: 4,
      currentMember: 4,
      reservationStartAt: "2023-07-06T05:59:34.831Z",
      reservationEndAt: "2023-07-10T00:50:00.831Z",
      tutorName: "홍길동",
    },
  ],
};

interface Schedule {
  lessonTitle: string;
  lessonScheduleID: number;
  lessonType: string;
  lessonDuration: number;
  maxGroupMember: number;
  reservationStartAt: string;
  reservationEndAt: string;
  tutorName: string;
}

interface GroupLessonReservation {
  schedules: Schedule[];
}

const useLessonReservationList = () => {
  // 만료된 토큰인지 확인합니다.
  const { accessToken, isCheckLoading } = useTokenCheck();

  const { data, error, isLoading } = useSWR<GroupLessonReservation>(
    !isCheckLoading &&
      accessToken && {
        url: "http://223.130.161.221/mapi/v1/schedules/group-lesson",
        auth: `Bearer ${accessToken.token}`,
      }
  );
  return { data, error, isLoading, exLessonListData };
};

export default useLessonReservationList;
