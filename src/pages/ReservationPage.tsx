import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReservationDateButton from "../components/ReservationDateButton";
import ReservationListBox from "../components/ReservationListBox";
import { useSelectedDate } from "../libs/useSelectedDate";
import { useUserReservationData } from "../libs/useUserReservationData";
import Layout from "../components/Layout";
import useLessonReservationList from "../api/reservation/useLessonReservationList";
import useReservedLessonList from "../api/reservation/useReservedLessonList";
import LoadingPage from "./LoadingPage";

const exLessonData = {
  schedules: [
    {
      lessonTitle: "필라테스 중급0",
      lessonSchduleID: 0,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 0,
      reservationStartAt: "2023-07-24T11:41:12.485Z",
      reservationEndAt: "2023-07-25T00:00:00.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급1",
      lessonSchduleID: 1,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 1,
      reservationStartAt: "2023-07-24T11:41:12.485Z",
      reservationEndAt: "2023-07-26T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급2",
      lessonSchduleID: 2,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 2,
      reservationStartAt: "2023-07-24T11:41:12.485Z",
      reservationEndAt: "2023-07-26T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급3",
      lessonSchduleID: 3,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 3,
      reservationStartAt: "2023-07-25T11:41:12.485Z",
      reservationEndAt: "2023-07-26T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
    {
      lessonTitle: "필라테스 중급4",
      lessonSchduleID: 4,
      lessonType: "SINGLE",
      lessonDuration: 0,
      maxGroupMember: 4,
      currentMember: 4,
      reservationStartAt: "2023-07-25T11:41:12.485Z",
      reservationEndAt: "2023-07-28T11:41:12.485Z",
      tutorName: "홍길동",
      lessonStartAt: "07:00",
      lessonEndAt: "08:30",
    },
  ],
};

const ReservationPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const { data } = useLessonReservationList();
  const { data: reservedLessonData } = useReservedLessonList();

  return (
    <Layout type="reservation">
      <div className="p-4">
        <ul className="flex justify-between">
          <li className="w-3/6 text-center ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-[#2D62EA] border-b-2 block text-[#2D62EA] font-bold pb-1 "
                  : "text-center border-b block pb-1"
              }
              onClick={() => {
                handleTabChange("all");
              }}
              to="/reservation"
            >
              전체강의
            </NavLink>
          </li>
          <li className="w-3/6 text-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-[#2D62EA] border-b-2 block text-[#2D62EA] font-bold pb-1 "
                  : "text-center border-b block pb-1"
              }
              onClick={() => handleTabChange("reserved")}
              to="/reservation-reserved"
            >
              예약중인 강의
            </NavLink>
          </li>
        </ul>
        {activeTab === "all" ? <AllLecturesTab /> : <ReservedLecturesTab />}
      </div>
    </Layout>
  );
};

const AllLecturesTab = () => {
  const { data } = useSelectedDate();
  const [showReservable, setShowReservable] = useState<boolean>(false);
  const { data: userReservationData } = useUserReservationData();

  const handleToggleReservable = () => {
    setShowReservable((prev) => !prev);
  };
  return (
    <>
      <div className="h-[85px]">
        <ReservationDateButton />
        <div className="flex justify-end text-xs font-semibold ">
          <button
            onClick={handleToggleReservable}
            className={showReservable ? "text-[#2D62EA] " : "text-[#7c7c7c] "}
          >
            {showReservable ? "예약 가능한 강의" : "예약 가능한 강의"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              className="inline-block ml-1"
            >
              <path
                d="M1.175 0.408325L5 4.23333L8.825 0.408325L10 1.59166L5 6.59166L0 1.59166L1.175 0.408325Z"
                fill={showReservable ? "#2D62EA" : "#7c7c7c"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {!userReservationData ? (
          <LoadingPage />
        ) : (
          exLessonData.schedules.map((lessonData) => {
            const startAt = new Date(lessonData.reservationStartAt);
            const endAt = new Date(lessonData.reservationEndAt);
            if (startAt <= data && data <= endAt) {
              if (
                !showReservable ||
                (lessonData.currentMember < lessonData.maxGroupMember &&
                  !userReservationData.lessonSchedulesID.includes(
                    lessonData.lessonSchduleID
                  ))
              ) {
                return (
                  <ReservationListBox
                    key={lessonData.lessonSchduleID}
                    lessonStartAt={lessonData.lessonStartAt}
                    lessonEndAt={lessonData.lessonEndAt}
                    lessonTitle={lessonData.lessonTitle}
                    tutorName={lessonData.tutorName}
                    currentMember={lessonData.currentMember}
                    maxGroupMember={lessonData.maxGroupMember}
                    lessonSchduleID={lessonData.lessonSchduleID}
                    userLessonSchedules={userReservationData.lessonSchedulesID}
                  />
                );
              }
            }
            return null;
          })
        )}
      </div>
    </>
  );
};
const ReservedLecturesTab = () => {
  const { data: userReservationData } = useUserReservationData();
  return (
    <>
      <div className="h-[85px]">
        <ReservationDateButton />
      </div>
      <div>
        {!userReservationData ? (
          <LoadingPage />
        ) : (
          exLessonData.schedules.map((data) => {
            if (
              userReservationData.lessonSchedulesID.includes(
                data.lessonSchduleID
              )
            ) {
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
                  userLessonSchedules={userReservationData.lessonSchedulesID}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default ReservationPage;
