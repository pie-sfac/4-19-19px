import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";
interface PersonalData {
  id: 0;
  uuid: string;
  createDate: string;
}

interface PersonReportList {
  datas: PersonalData[];
  meta: {
    totalCount: number;
    size: number;
    count: number;
    page: number;
    hasMore: boolean;
  };
  message: string;
}

const ACCESS_TOKEN = "accessToken";
const accessToken = localStorage.getItem(ACCESS_TOKEN);
const token = accessToken ? JSON.parse(accessToken).token : null;

const fetcher = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const usePersonalReportList = () => {
  const { isCheckLoading } = useTokenCheck();
  const { data, error, isLoading } = useSWR<PersonReportList>(
    !isCheckLoading && "http://223.130.161.221/mapi/v1/personal-reports",
    fetcher
  );
  return { data, error, isLoading };
};
export default usePersonalReportList;
