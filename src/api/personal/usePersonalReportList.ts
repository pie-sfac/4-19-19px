import useSWR from "swr";
interface PersonalData {
  id: 0;
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  createDate: "2023-07-20T05:53:08.845Z";
}
//interface 괄호 안, []array의 편리한 사용을 위해 분리가능
interface PersonReportList {
  datas: PersonalData[];
  meta: {
    totalCount: 0,
    size: 0,
    count: 0,
    page: 0,
    hasMore: true,
  };
  message: "string";
}
export const reportListFetcher = (url: string) => fetch(url).then(res => res.json());
const PersonalReportListApi = () => {
  const { data, error, isLoading } = useSWR < PersonReportList > ("personal-report-list", reportListFetcher);
  return { data, error, isLoading };
};
export default PersonalReportListApi;
