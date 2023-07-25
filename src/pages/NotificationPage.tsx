import NotificationListBox from "../components/NotificationListBox";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const alarmData = {
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
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-20T09:03:50.454Z",
      },
      {
        id: 1,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-18T09:03:50.454Z",
      },
      {
        id: 2,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-15T09:03:50.454Z",
      },
      {
        id: 3,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-14T09:03:50.454Z",
      },
      {
        id: 4,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-11T09:03:50.454Z",
      },
      {
        id: 5,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-10T09:03:50.454Z",
      },
      {
        id: 6,
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-07-07T09:03:50.454Z",
      },
    ],
    message: "string",
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <p className="border-b border-b-1 border-gray-300 mx-0 h-14 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          onClick={handleGoBack}
        >
          <path
            d="M11.6732 2.58002L10.4866 1.40002L3.89322 8.00002L10.4932 14.6L11.6732 13.42L6.25322 8.00002L11.6732 2.58002Z"
            fill="#505050"
          />
        </svg>
      </p>
      <div className="flex flex-col">
        <p className="font-bold mt-5">알림 메시지 리스트</p>
        {alarmData.datas.map((data) => (
          <NotificationListBox
            key={data.id}
            createDate={data.createDate}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
