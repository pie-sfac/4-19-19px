import base64 from "base-64";

const useTokenSave = () => {
  const ACCESS_TOKEN = "accessToken";
  const REFRESH_TOKEN = "refreshToken";

  const handleAccessToken = (token: string) => {
    const payload = token.substring(
      token.indexOf(".") + 1,
      token.lastIndexOf(".")
    );
    const dec = base64.decode(payload);
    localStorage.setItem(
      ACCESS_TOKEN,
      JSON.stringify({ token, exp: JSON.parse(dec).exp })
    );
  };

  const handleRefreshToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN, JSON.stringify({ token }));
  };

  return { handleAccessToken, handleRefreshToken };
};

export default useTokenSave;
