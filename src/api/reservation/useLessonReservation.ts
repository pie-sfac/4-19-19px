import { useEffect, useState } from "react";
import useTokenCheck from "../../libs/useTokenCheck";

const useLessonReservation = () => {
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccesstoken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  const [token, setToken] = useState(parseAccesstoken);
  const { isCheckLoading } = useTokenCheck();

  const [isReserved, setIsReserved] = useState(false);
  useEffect(() => {
    setToken(JSON.parse(localAccessToken!).token);
  }, [isCheckLoading]);

  const handleReserve = async (lessonScheduleId: number) => {
    const url = "http://223.130.161.221/mapi/v1/lesson-reservations";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonScheduleId: lessonScheduleId,
        }),
      });
      const json = await response.json();
      console.log("예약완료", json);
      setIsReserved(true);
    } catch (error) {
      console.log(error);
    }
  };
  return { isReserved, handleReserve };
};
export default useLessonReservation;
