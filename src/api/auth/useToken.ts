import { useState, useEffect } from "react";
import useTokenControl from "../../libs/useTokenControl";

interface useTokenType {
  getNewAccessToken: (token: string) => Promise<void>;
  isLoadig: boolean;
}

const useToken = (): useTokenType => {
  const [isLoadig, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState();
  const { handleAccessToken } = useTokenControl();

  const getNewAccessToken = async (token: string) => {
    const response = await fetch("http://223.130.161.221/mapi/v1/tokens", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    if (json.accessToken) {
      setAccessToken(json.accessToken);
    } else {
      // refresh 토큰이 만료
      // 로그아웃
    }
  };

  useEffect(() => {
    if (accessToken) {
      handleAccessToken(accessToken);
      setIsLoading(false);
    }
  }, [accessToken, handleAccessToken]);

  return { getNewAccessToken, isLoadig };
};

export default useToken;
