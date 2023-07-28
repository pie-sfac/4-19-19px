import NotificationListBox from "../components/NotificationListBox";

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

  return (
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
  );
};

export default NotificationPage;
