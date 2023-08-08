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

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isPasswordMatchError, setIsPasswordMatchError] = useState(false);

  useEffect(() => {
    setIsPasswordMatch(password === passwordConfirmation);
    setIsPasswordMatchError(password !== passwordConfirmation);
  }, [password, passwordConfirmation]);

  const handleSendClick = () => {
    setShowResendButton(true);
  };

  const handleResendClick = () => {
    setShowResendButton(false);
  };

  const handleUpdateClick = () => {
    if (isPasswordMatchError || !password || !passwordConfirmation) {
      return;
    }
    setPasswordConfirmation("");
    setShowResendButton(false);
  };

  // <div className="flex items-center gap-1 text-l font-medium">
  //   <span className="block w-2 h-2 bg-[#0833A0] rounded-full"></span>
  //   <span>비밀번호 변경</span>
  // </div>;
  return (
    <Layout type="myPage">
      <div className="px-4 py-6">
        {/* <header className="flex justify-between items-start"> */}
        {/* <div className="flex items-center gap-1 text-l font-medium"> */}
        <div className="flex items-center gap-1 text-l font-medium">
          <span className="block w-2 h-2 bg-[#0833A0] rounded-full"></span>
          <span>{personalInfo.member.name}님 기본정보</span>
        </div>
        {/* <div className="text-xl font-bold">
          {personalInfo.member.name}님 기본정보
        </div> */}
        {/* </div> */}
        {/* </header> */}

        <div className="flex flex-col relative">
          <div className="mb-1">
            {/* <div className="h-3 mt-7 bg-gray-100"></div> section 줄 긋기*/}
            <label
              htmlFor="id"
              className="block font-normal text-xs text-gray-700 mt-4"
            >
              아이디
            </label>
            <input
              disabled
              type="text"
              id="id"
              value={personalInfo.member.id}
              className="cursor-not-allowed border border-gray-300 bg-slate-100 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-normal text-xs text-gray-700"
            >
              이름
            </label>
            <input
              disabled
              type="text"
              id="name"
              value={personalInfo.member.name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 bg-slate-100 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block font-normal text-xs text-gray-700"
            >
              휴대폰 번호
            </label>
            <div className="flex items-center">
              <input
                placeholder="번호입력"
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-[220px]"
              />
              {showResendButton ? (
                <button
                  className="bg-white border border-solid border-gray-300 rounded-md text-black font-normal text-xs leading-5 px-4 py-2 w-[92px] h-[42px] text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ml-4"
                  onClick={handleResendClick}
                >
                  재전송
                </button>
              ) : (
                <button
                  className="bg-white border border-solid border-gray-300 rounded-md text-black font-normal text-xs leading-5 px-4 py-2 w-[92px] h-[42px] text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ml-4"
                  onClick={handleSendClick}
                >
                  전송
                </button>
              )}
            </div>

            <input
              placeholder="인증번호"
              required
              type="text"
              id="athentication"
              value=""
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 border border-gray-300 rounded-md px-4 py-2 w-[220px]"
            />
            <button className="bg-white border border-solid border-gray-300 rounded-md text-black font-normal text-xs leading-5 px-4 py-2 w-[92px] h-[42px] text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ml-4">
              인증확인
            </button>
          </div>

          <div className="flex items-center gap-1 text-l font-medium mb-4">
            <span className="block w-2 h-2 bg-[#0833A0] rounded-full"></span>
            <span>비밀번호 변경</span>
          </div>

          <div className="mb-1">
            <label
              htmlFor="newPassword"
              className="block font-normal text-xs text-gray-700"
            >
              새 비밀번호
            </label>
            <input
              type="password"
              id="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border ${
                isPasswordMatch ? "border-green-500" : "border-gray-300"
              } bg-white rounded-md px-4 py-2 w-full`}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="passwordConfirmation"
              className="block font-normal text-xs text-gray-700"
            >
              새 비밀번호 확인
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className={`border ${
                isPasswordMatchError ? "border-red-500" : "border-gray-300"
              } bg-white rounded-md px-4 py-2 w-full transition-all duration-500`}
            />
            {!isPasswordMatch && !isPasswordMatchError && (
              <div className="text-green-500 font-normal text-xs mt-1">
                입력한 비밀번호가 일치합니다.
              </div>
            )}
            {isPasswordMatchError && (
              <div className="text-red-500 font-normal text-xs mt-1">
                비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-white border border-solid border-gray-300 rounded-md text-black ffont-normal text-xs leading-5 px-4 py-2 text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-4"
              onClick={handleUpdateClick}
            >
              수정하기
            </button>
            <Link
              to="#"
              className="bg-white border border-solid border-gray-300 rounded-md text-black font-normal text-xs leading-5 px-4 py-2 text-center shadow-xs cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              회원탈퇴
            </Link>
          </div>
        </div>
        <CompanySection />
      </div>
    </Layout>
  );
};

export default MyPage;
