import useSWR from "swr";

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
  const { data, error, isLoading } = useSWR<PersonReportList>(
    "http://223.130.161.221/mapi/v1/personal-reports"
  );

  return { data, error, isLoading };
};
export default usePersonalReportList;
