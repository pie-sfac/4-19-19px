import { useEffect, useState } from "react";
import useTokenCheck from "../../libs/useTokenCheck";

const useLessonReservationCancel = () => {
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccesstoken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  const [token, setToken] = useState(parseAccesstoken);
  const { isCheckLoading } = useTokenCheck();

  const [isCancled, setIsCancled] = useState(false);
  useEffect(() => {
    setToken(JSON.parse(localAccessToken!).token);
  }, [isCheckLoading]);

  const handleCancel = async (reservationId: number) => {
    const url = `http://223.130.161.221/mapi/v1/lesson-reservations/${reservationId}/cancel`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      console.log("예약취소", json);
      setIsCancled(true);
    } catch (error) {
      console.log(error);
    }
  };
  return { isCancled, handleCancel };
};
export default useLessonReservationCancel;
