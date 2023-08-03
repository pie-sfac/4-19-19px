import { useEffect, useState } from "react";
import useTokenCheck from "../../libs/useTokenCheck";
import useSWR from "swr";

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
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccesstoken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  const [token, setToken] = useState(parseAccesstoken);
  const { isCheckLoading } = useTokenCheck();

  useEffect(() => {
    setToken(JSON.parse(localAccessToken!).token);
  }, [isCheckLoading]);

  const fetcher = (url: string) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR<ReservedLesson>(
    !isCheckLoading &&
      token &&
      "http://223.130.161.221/mapi/v1/lesson-reservations",
    fetcher
  );

  return { data, error, isLoading };
};
export default useReservedLessonList;
