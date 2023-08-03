import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../components/MyPage/ProfileImage/ProfileImage";

const personalInfo = {
  member: {
    id: 0,
    name: "홍길동",
    phone: "string",
    sex: "MALE",
    birthDate: "2023-07-19",
    createdAt: "2023-07-19T06:05:16.520Z",
    updatedAt: "2023-07-19T06:05:16.520Z",
    visitedAt: "2023-07-19T06:05:16.520Z",
  },
};

const MyPage = () => {
  //모달 회원정보
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const [selectedDate, setSelectedDate] = useState<string | null>(null);
  // const [currentDateTime, setCurrentDateTime] = useState<string>(
  //   new Date().toLocaleString()
  // );

  // const currentDate = new Date();
  // const weekDates: string[] = [];

  // const formatDateTime = (dateTime: string) => {
  //   const dateObj = new Date(dateTime);
  //   const year = dateObj.getFullYear();
  //   const month = dateObj.toLocaleString("default", { month: "long" });
  //   const day = dateObj.getDate();

  //   return `${year}, ${month} ${day}`;
  // };

  return (
    //PUSH 전에 높이 900px 지우기 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    <div className="px-4 py-6">
      <header className="flex justify-between items-start">
        <div>
          <ProfileImage />
        </div>
        <div className="flex items-end gap-17">
          <div className="text-xl font-bold">
            {personalInfo.member.name} 회원님
            {/* <div className="text-l font-bold gap-18">
              {formatDateTime(currentDateTime)}
            </div> */}
          </div>
        </div>
      </header>
      <div className="flex flex-col relative">
        <Link
          to="/myupdate"
          // onClick={handleOpenModal}
          className="text-xs text-[#64657c] mt-auto mb-2"
        >
          회원정보
        </Link>
        <Link
          to="#"
          //onClick={handleOpenModal}
          className="text-xs text-[#64657c] mt-auto mb-2  "
        >
          로그아웃
        </Link>
        <Link
          to="#"
          //onClick={handleOpenModal}
          className="text-xs text-[#64657c] mt-auto mb-2 "
        >
          회원탈퇴
        </Link>
        <div className="mt-12 px-4 py-5 text-sm bg-[#F4F4F4] justify-between items-start  fixed bottom-0">
          <div>포인티 센터</div>

          <div className="ml-7 text-[#505050]">
            <div>서울시 남부 순환로 1801, 라피스 빌딩 8층</div>
            <div>02-840-9002</div>
          </div>
        </div>
        {/* <div className="mt-4">
          <div className="grid grid-cols-7 gap-4 mt-2"></div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold"></h2>
        </div> */}
      </div>
      {/* {selectedDate && (
        <div className="fixed top-1 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-2">Todo for {selectedDate}</h3>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MyPage;
