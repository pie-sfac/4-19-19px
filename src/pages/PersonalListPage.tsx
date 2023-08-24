import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PersonalListBox from "../components/PersonalListBox";
import Layout from "../components/Layout";
import usePersonalReportList from "../api/personal/usePersonalReportList";
import LoadingPage from "./LoadingPage";
import useIntersect from "../libs/useIntersect";

interface Data {
  id: number;
  uuid: string;
  createDate: string;
  condition: string;
}

const PersonalListPage = () => {
  const exData = {
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
        condition: "worst",
      },
      {
        id: 6,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
        createDate: "2023-07-27T07:29:45.701Z",
        condition: "best",
      },
      {
        id: 7,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
        createDate: "2023-07-28T07:29:45.701Z",
        condition: "good",
      },
      {
        id: 8,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
        createDate: "2023-07-31T07:29:45.701Z",
        condition: "normal",
      },
      {
        id: 9,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
        createDate: "2023-08-02T07:29:45.701Z",
        condition: "bad",
      },
      {
        id: 10,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
        createDate: "2023-08-05T07:29:45.701Z",
        condition: "worst",
      },
      {
        id: 11,
        uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
        createDate: "2023-08-06T06:36:46.798Z",
        condition: "worst",
      },
      {
        id: 12,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
        createDate: "2023-08-05T07:29:45.701Z",
        condition: "worst",
      },
      {
        id: 13,
        uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
        createDate: "2023-08-06T06:36:46.798Z",
        condition: "worst",
      },
      {
        id: 14,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
        createDate: "2023-07-27T07:29:45.701Z",
        condition: "best",
      },
      {
        id: 15,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
        createDate: "2023-07-28T07:29:45.701Z",
        condition: "good",
      },
      {
        id: 16,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
        createDate: "2023-07-31T07:29:45.701Z",
        condition: "normal",
      },
      {
        id: 17,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
        createDate: "2023-08-02T07:29:45.701Z",
        condition: "bad",
      },
      {
        id: 18,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
        createDate: "2023-08-05T07:29:45.701Z",
        condition: "worst",
      },
      {
        id: 19,
        uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
        createDate: "2023-08-06T06:36:46.798Z",
        condition: "worst",
      },
      {
        id: 20,
        uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
        createDate: "2023-08-06T06:36:46.798Z",
        condition: "worst",
      },
    ],
    message: "string",
  };

  const [sortOption, setSortOption] = useState<string>("latest");
  const [slice, setSlice] = useState(0);
  const [visibleData, setVisibleData] = useState<Data[]>(
    exData.datas.slice(0, 10)
  );
  const { data } = usePersonalReportList();
  // onintersect함수는 observer을 unobserver하고 slice를 값을 증가 시킵니다. maxSlice에 도달하면 더 이상 증가하지 않습니다.
  const onintersect = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    const maxSlice = Math.ceil(exData.datas.length / 10) - 1;
    observer.unobserve(entry.target);
    if (slice !== maxSlice) {
      setSlice((pre) => pre + 1);
    }
  };
  // slice가 변경될떄 마다 visibleData에 데이터가 중가합니다.
  useMemo(() => {
    if (slice === 0) {
      return;
    }
    setVisibleData((pre) => [
      ...pre,
      ...exData.datas.slice(slice * 10, (slice + 1) * 10),
    ]);
  }, [slice]);

  const ref = useIntersect(onintersect);

  const handleCondition = (condition: string) => {
    let conditionNumber = 0;
    if (condition === "best") conditionNumber = 5;
    if (condition === "good") conditionNumber = 4;
    if (condition === "normal") conditionNumber = 3;
    if (condition === "bad") conditionNumber = 2;
    if (condition === "worst") conditionNumber = 1;
    return conditionNumber;
  };

  useEffect(() => {
    const sortedData = [...visibleData];
    switch (sortOption) {
      case "latest":
        sortedData.sort(
          (a, b) =>
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        );
        break;
      case "oldest":
        sortedData.sort(
          (a, b) =>
            new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
        );
        break;
      case "good":
        sortedData.sort((a, b) => {
          const conditionComparison =
            handleCondition(b.condition) - handleCondition(a.condition);
          if (conditionComparison !== 0) {
            return conditionComparison;
          }

          return (
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
          );
        });
        break;
      case "bad":
        sortedData.sort((a, b) => {
          const conditionComparison =
            handleCondition(a.condition) - handleCondition(b.condition);
          if (conditionComparison !== 0) {
            return conditionComparison;
          }
          return (
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
          );
        });
        break;
      default:
        break;
    }
    setVisibleData(sortedData);
  }, [sortOption]);
  return (
    <Layout type="personalList">
      {!data ? (
        <LoadingPage />
      ) : (
        <>
          <div className="flex justify-end px-4 pb-4 text-sm border-b">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="latest">최신순</option>
              <option value="oldest">오래된순</option>
              <option value="good">좋은순</option>
              <option value="bad">나쁜순</option>
            </select>
          </div>
          <div className="p-4">
            {visibleData.map((data) => (
              <PersonalListBox
                key={data.id}
                uuid={data.uuid}
                createDate={data.createDate}
                condition={data.condition}
              />
            ))}
          </div>
          <div ref={ref} className="h-1"></div>
        </>
      )}
    </Layout>
  );
};
export default PersonalListPage;
