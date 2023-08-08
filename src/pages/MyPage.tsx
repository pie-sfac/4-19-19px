import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../components/MyPage/ProfileImage/ProfileImage";
import Layout from "../components/Layout";
import useLogout from "../api/auth/useLogout";
import CompanySection from "../components/PersonalReport/Company/CompanySection";

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
  const { handleLogout, isLoggedOut } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/login");
    }
  }, [isLoggedOut]);

  return (
    <Layout type="myPage">
      <div className="px-4 py-6">
        <header className="flex justify-between items-start">
          <div className="flex items-end gap-17">
            <div className="text-xl font-bold">
              {personalInfo.member.name} 회원님
            </div>
          </div>
          <div>
            <ProfileImage />
          </div>
        </header>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            to="/myupdate"
            className="bg-white border border-solid border-gray-300 rounded-md text-black font-semibold text-xs leading-5 px-4 py-2 text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            회원정보
          </Link>
          <button
            className="bg-white border border-solid border-gray-300 rounded-md text-black font-semibold text-xs leading-5 px-4 py-2 text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </div>
        <CompanySection />
      </div>
    </Layout>
  );
};

export default MyPage;
