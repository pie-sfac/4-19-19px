import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";

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
  return { data, error, isLoading };
};

export default useLessonReservationList;
