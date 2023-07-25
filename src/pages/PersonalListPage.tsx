import { useEffect, useState } from "react";
import PersonalListBox from "../components/PersonalListBox";
import { Link } from "react-router-dom";

interface Data {
  id: number;
  uuid: string;
  createDate: string;
  condition: string;
}

const PersonalListPage = () => {
  const exData = {
    meta: {
      totalCount: 3,
      size: 3,
      count: 3,
      page: 0,
      hasMore: true,
    },
    datas: [
      {
        id: 0,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-01T07:29:45.701Z",
        condition: "5",
      },
      {
        id: 1,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-10T07:29:45.701Z",
        condition: "3",
      },
      {
        id: 2,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-19T07:29:45.701Z",
        condition: "1",
      },
      {
        id: 3,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-20T07:29:45.701Z",
        condition: "5",
      },
    ],
    message: "string",
  };

  const [personalData, setPersonalData] = useState<Data[]>(exData.datas);
  const [sortOption, setSortOption] = useState<string>("latest");

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
          const conditionComparison = Number(b.condition) - Number(a.condition);
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
          const conditionComparison = Number(a.condition) - Number(b.condition);
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
    <>
      <div className="px-4 py-4">
        <Link to={`/`}>
          <h1 className="text-2xl font-bold">&lt; 퍼스널 리포트</h1>
        </Link>
      </div>
      <div className="flex justify-end">
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
      <div className="px-4 py-4">
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
  );
};

export default PersonalListPage;
