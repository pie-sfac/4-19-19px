import { useState, useEffect } from "react";
import useTokenControl from "../../libs/useTokenControl";

interface useLogoutType {
  handleLogout: () => Promise<void>;
  isLoggedOut: boolean;
}

const useLogout = (): useLogoutType => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const { handleTokenDelete } = useTokenControl();
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccessToken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  console.log(parseAccessToken);

  const handleLogout = async () => {
    const url = "http://223.130.161.221/mapi/v1/logout";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${parseAccessToken}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (json) {
        setIsLoggedOut(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedOut) {
      handleTokenDelete();
    }
  }, [isLoggedOut]);

  return { handleLogout, isLoggedOut };
};

export default useLogout;
