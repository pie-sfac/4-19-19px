import { useState, useEffect } from "react";
import useTokenControl from "../../libs/useTokenControl";
import { isIncorrectAtom } from "../../atom";
import { useSetRecoilState } from "recoil";

interface useLoginType {
  handleLogin: (username: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
}

const useLogin = (): useLoginType => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setIsIncorrect = useSetRecoilState(isIncorrectAtom);
  const { handleAccessToken, handleRefreshToken } = useTokenControl();

  const handleLogin = async (username: string, password: string) => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (korean.test(username) || korean.test(password)) {
      setIsIncorrect(true);
      return;
    }

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
        setIsIncorrect(true);
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

  return { handleLogin, isLoggedIn };
};
export default useLogin;
