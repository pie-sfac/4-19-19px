import React, { useState } from "react";
import ReservationDateButton from "../components/ReservationDateButton";
import ReservationListBox from "../components/ReservationListBox";

const exLessonData = {
  schedules: [
    {
      lessonTitle: "필라테스 중급",
      lessonSchduleID: 0,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 0,
      reservationStartAt: "2023-07-20T11:41:12.485Z",
      reservationEndAt: "2023-07-20T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급",
      lessonSchduleID: 1,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 1,
      reservationStartAt: "2023-07-20T11:41:12.485Z",
      reservationEndAt: "2023-07-21T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급",
      lessonSchduleID: 2,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 2,
      reservationStartAt: "2023-07-20T11:41:12.485Z",
      reservationEndAt: "2023-07-22T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급",
      lessonSchduleID: 3,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 3,
      reservationStartAt: "2023-07-20T11:41:12.485Z",
      reservationEndAt: "2023-07-23T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급",
      lessonSchduleID: 4,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 4,
      reservationStartAt: "2023-07-20T11:41:12.485Z",
      reservationEndAt: "2023-07-24T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
  ],
};

const exUserData = {
  users: [
    {
      id: 0,
      name: "string",
    },
  ],
  lessonSchedulesID: [2, 3],
};

const ReservationPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>수업 예약 페이지</h1>
      <div>
        <button
          onClick={() => handleTabChange("all")}
          style={{ marginRight: "10px" }}
        >
          전체강의
        </button>
        <button onClick={() => handleTabChange("reserved")}>
          예약중인 강의
        </button>
      </div>
      {activeTab === "all" ? <AllLecturesTab /> : <ReservedLecturesTab />}
    </div>
  );
};

const AllLecturesTab = () => {
  return (
    <>
      <ReservationDateButton />
      <div>
        {exLessonData.schedules.map((data) => (
          <ReservationListBox
            key={data.lessonSchduleID}
            lessonStartAt={data.lessonStartAt}
            lessonEndAt={data.lessonEndAt}
            lessonTitle={data.lessonTitle}
            tutorName={data.tutorName}
            currentMember={data.currentMember}
            maxGroupMember={data.maxGroupMember}
            lessonSchduleID={data.lessonSchduleID}
            userLessonSchedules={exUserData.lessonSchedulesID}
          />
        ))}
      </div>
    </>
  );
};

const ReservedLecturesTab = () => {
  return (
    <>
      <ReservationDateButton />
      <div>
        {exLessonData.schedules.map((data) => {
          if (exUserData.lessonSchedulesID.includes(data.lessonSchduleID)) {
            return (
              <ReservationListBox
                key={data.lessonSchduleID}
                lessonStartAt={data.lessonStartAt}
                lessonEndAt={data.lessonEndAt}
                lessonTitle={data.lessonTitle}
                tutorName={data.tutorName}
                currentMember={data.currentMember}
                maxGroupMember={data.maxGroupMember}
                lessonSchduleID={data.lessonSchduleID}
                userLessonSchedules={exUserData.lessonSchedulesID}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default ReservationPage;
