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

const ACCESS_TOKEN = "accessToken";
const accessToken = localStorage.getItem(ACCESS_TOKEN);
const token = accessToken ? JSON.parse(accessToken).token : null;

const fetcher = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const useLessonReservationList = () => {
  const { isCheckLoading } = useTokenCheck();
  const { data, error, isLoading } = useSWR<GroupLessonReservation>(
    !isCheckLoading && "http://223.130.161.221/mapi/v1/schedules/group-lesson",
    fetcher
  );

  return { data, error, isLoading };
};

export default useLessonReservationList;
