import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";

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

const useReservedLessonList = async () => {
  const { accessToken, isCheckLoading } = useTokenCheck();

  const { data, error, isLoading } = useSWR<ReservedLesson>(
    !isCheckLoading &&
      accessToken && {
        url: "http://223.130.161.221/mapi/v1/lesson-reservations",
        auth: `Bearer ${accessToken.token}`,
      }
  );

  return { data, error, isLoading };
};
export default useReservedLessonList;
