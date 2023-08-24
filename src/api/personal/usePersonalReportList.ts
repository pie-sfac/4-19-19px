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

const personalReportListDummyData = {
  meta: {
    totalCount: 0,
    size: 0,
    count: 0,
    page: 0,
    hasMore: true,
  },
  datas: [
    {
      id: 0,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
      createDate: "2023-07-27T07:29:45.701Z",
      condition: "best",
    },
    {
      id: 1,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
      createDate: "2023-07-28T07:29:45.701Z",
      condition: "good",
    },
    {
      id: 2,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
      createDate: "2023-07-31T07:29:45.701Z",
      condition: "normal",
    },
    {
      id: 3,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
      createDate: "2023-08-02T07:29:45.701Z",
      condition: "bad",
    },
    {
      id: 4,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
      createDate: "2023-08-05T07:29:45.701Z",
      condition: "worst",
    },
    {
      id: 5,
      uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
      createDate: "2023-08-06T06:36:46.798Z",
    },
  ],
  message: "string",
};

const usePersonalReportList = () => {
  const { data, error, isLoading } = useSWR<PersonReportList>(
    "http://223.130.161.221/mapi/v1/personal-reports"
  );

  return { data: personalReportListDummyData, error, isLoading };
};
export default usePersonalReportList;
