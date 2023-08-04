import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";
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
  // 만료된 토큰인지 확인합니다.
  const { accessToken, isCheckLoading } = useTokenCheck();

  const { data, error, isLoading } = useSWR<PersonReportList>(
    !isCheckLoading &&
      accessToken && {
        url: "http://223.130.161.221/mapi/v1/personal-reports",
        auth: `Bearer ${accessToken.token}`,
      }
  );

  return { data, error, isLoading };
};
export default usePersonalReportList;
