import { useEffect, useState } from "react";
import PersonalListBox from "../components/PersonalListBox";
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

  const [personalData, setPersonalData] = useState(exData.datas);
  const [sortOption, setSortOption] = useState("latest"); // 정렬 옵션 상태

  useEffect(() => {
    const sortedData = personalData.slice();
    switch (sortOption) {
      case "latest":
        sortedData.sort(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
        break;
      case "oldest":
        sortedData.sort(
          (a, b) => new Date(a.createDate) - new Date(b.createDate)
        );
        break;
      case "good":
        sortedData.sort((a, b) => Number(b.condition) - Number(a.condition));
        break;
      case "bad":
        sortedData.sort((a, b) => Number(a.condition) - Number(b.condition));
        break;
      default:
        break;
    }
    setPersonalData(sortedData);
  }, [sortOption]);

  return (
    <>
      <div>
        <h1>&lt; 퍼스널 리포트</h1>
      </div>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="latest">최신순</option>
        <option value="oldest">오래된순</option>
        <option value="good">좋은순</option>
        <option value="bad">나쁜순</option>
      </select>
      {personalData.map((data) => (
        <PersonalListBox
          key={data.id}
          uuid={data.uuid}
          createDate={data.createDate}
          condition={data.condition}
        />
      ))}
    </>
  );
};

export default PersonalListPage;
