import useSWR from "swr";
const useDetailReport = (id: string) => {
  // fetcher는 전역 상태로 주었음을 가정
  const { data, error, isLoading } = useSWR(
    `http://223.130.161.221/mapi/v1/personal-reports/3fa85f64-5717-4562-b3fc-2c963f66afa6/${id}`
  );
  return { data, error, isLoading };
};
export default useDetailReport;
