import { useState, useEffect } from "react";
import useTokenSave from "../../libs/useTokenSave";

interface useLoginType {
  handleLogin: (username: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
  isUncorrect: boolean;
}

const useLogin = (): useLoginType => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUncorrect, setIsUncorrect] = useState(false);
  const { handleAccessToken, handleRefreshToken } = useTokenSave();

  const handleLogin = async (username: string, password: string) => {
    const token = `${username}:${password}`;
    const baseEncode = btoa(token);
    const url = "http://223.130.161.221/mapi/v1/login?centerCode=2399656";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${baseEncode}`,
        },
      });
      const json = await response.json();
      if (json.accessToken) {
        setIsLoggedIn(true);
        setAccessToken(json.accessToken);
        setRefreshToken(json.refreshToken);
      } else {
        setIsUncorrect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      handleAccessToken(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      handleRefreshToken(refreshToken);
    }
  }, [refreshToken]);

  return { handleLogin, isLoggedIn, isUncorrect };
};
export default useLogin;
