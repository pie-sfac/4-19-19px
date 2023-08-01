import { useState, useEffect } from "react";
import useToken from "../api/auth/useToken";

// access token 만료시 refresh token으로 새로운 access token 받기
const useTokenCheck = () => {
  const { getNewAccessToken, isLoadig } = useToken();
  const [isCheckLoading, setIsCheckLoading] = useState(true);

  const ACCESS_TOKEN = "accessToken";
  const REFRESH_TOKEN = "refreshToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parsedAceessToken = localAccessToken && JSON.parse(localAccessToken);
  const tokenExp = parsedAceessToken.exp;
  const currentTime = Date.now();

  useEffect(() => {
    if (tokenExp * 1000 < currentTime) {
      const localRefreshToken = localStorage.getItem(REFRESH_TOKEN);
      const parsedRefreshToken =
        localRefreshToken && JSON.parse(localRefreshToken);
      getNewAccessToken(parsedRefreshToken.token);
    } else {
      setIsCheckLoading(false);
    }
  }, [tokenExp, currentTime, getNewAccessToken]);

  useEffect(() => {
    if (!isLoadig) {
      setIsCheckLoading(false);
    }
  }, [isLoadig]);

  return { isCheckLoading };
};

export default useTokenCheck;
