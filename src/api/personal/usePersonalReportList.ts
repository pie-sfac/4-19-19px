import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";
import { useEffect, useState } from "react";
interface PersonalReport {
  id: 0;
  uuid: string;
  createDate: string;
}

interface PersonReportList {
  datas: PersonalReport[];
  meta: {
    totalCount: number;
    size: number;
    count: number;
    page: number;
    hasMore: boolean;
  };
}

const usePersonalReportList = () => {
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccesstoken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  const [token, setToken] = useState(parseAccesstoken);
  // 만료된 토큰인지 확인합니다.
  const { isCheckLoading } = useTokenCheck();

  // 토큰 체크가 끝나면 토큰을 setState에 저장합니다.
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

  const { data, error, isLoading } = useSWR<PersonReportList>(
    !isCheckLoading &&
      token &&
      "http://223.130.161.221/mapi/v1/personal-reports",
    fetcher
  );

  return { data, error, isLoading };
};
export default usePersonalReportList;
