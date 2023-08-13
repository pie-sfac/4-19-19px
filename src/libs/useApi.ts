import axios from "axios";
import useTokenControl from "./useTokenControl";

// axios interceptors를 이용하여 token을 관리합니다.
const useApi = () => {
  const ACCESS_TOKEN = "accessToken";
  const REFRESH_TOKEN = "refreshToken";
  // axios 인스턴스를 생성합니다.
  const api = axios.create({ headers: { Accept: "application/json" } });
  // 새로운 토큰을 받아오는 함수입니다.
  const getToken = async () => {
    const localRefreshToken = localStorage.getItem(REFRESH_TOKEN);
    const parsedRefreshToken =
      localRefreshToken && JSON.parse(localRefreshToken);
    const { handleAccessToken, handleRefreshToken } = useTokenControl();
    const {
      data: { accessToken, refreshToken },
    } = await axios({
      method: "POST",
      url: "http://223.130.161.221/mapi/v1/tokens",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${parsedRefreshToken.token}`,
      },
    });
    // 토큰을 로컬스토리지에 저장합니다.
    handleAccessToken(accessToken);
    handleRefreshToken(refreshToken);
    return accessToken;
  };
  // 요청 인터셉터를 추가합니다.
  api.interceptors.request.use((config) => {
    const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
    const parsedAccessToken = localAccessToken && JSON.parse(localAccessToken);
    if (parsedAccessToken) {
      config.headers.Authorization = `Bearer ${parsedAccessToken.token}`;
    }
    return config;
  });
  // 응답 인터셉터를 추가합니다.
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status !== 401 || config.sent) {
        return Promise.reject(error);
      }
      config.sent = true;
      const { accessToken } = await getToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return api(config);
    }
  );
  return { api };
};

export default useApi;
