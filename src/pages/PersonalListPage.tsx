import { useEffect, useState } from "react";
import PersonalListBox from "../components/PersonalListBox";
import Layout from "../components/Layout";
import usePersonalReportList from "../api/personal/usePersonalReportList";
import LoadingPage from "./LoadingPage";

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
    ],
    message: "string",
  };

  const [personalData, setPersonalData] = useState<Data[]>(exData.datas);
  const [sortOption, setSortOption] = useState<string>("latest");
  const { data } = usePersonalReportList();

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
    const sortedData = personalData.slice();

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
    setPersonalData(sortedData);
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
            {personalData.map((data) => (
              <PersonalListBox
                key={data.id}
                uuid={data.uuid}
                createDate={data.createDate}
                condition={data.condition}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};
export default PersonalListPage;
