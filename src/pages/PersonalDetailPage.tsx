import { Link } from "react-router-dom";
import DateSlider from "../components/DateSlider";
import DetailSection from "../components/DetailSection";
import CommentSection from "../components/CommentSection";
import ShareSection from "../components/ShareSection";

const personalReport = {
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  writer: {
    id: 0,
    name: "김파이",
  },
  center: {
    id: 0,
    name: "string",
    code: "string",
    phone: "string",
    address: "string",
    contackLink: "string",
  },
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
  reviewRating: 0,
  reviewContent: "string",
  comment: {
    hidden: true,
    content: "해당 데이터가 피드백 데이터입니다.",
  },
  media: {
    hidden: true,
    items: [
      {
        type: "IMAGE",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        url: "string",
        thumbnailUrl: "string",
      },
      {
        type: "VIDEO",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
        url: "string",
        thumbnailUrl: "string",
      },
    ],
  },
  archiveLink: {
    hidden: true,
    items: [
      {
        title: "string",
        description: "string",
        url: "linkUrl-1",
        site: "string",
      },
      {
        title: "string",
        description: "string",
        url: "linkUrl-2",
        site: "string",
      },
    ],
  },
  painHistory: {
    hidden: true,
    items: [
      {
        bodyCode: 0,
        histories: [
          {
            date: "2023-07-19",
            level: 0,
          },
        ],
      },
    ],
  },
  condition: {
    hidden: true,
    items: [
      {
        date: "2023-07-19",
        condition: "string",
      },
      {
        date: "2023-07-18",
        condition: "string",
      },
      {
        date: "2023-07-17",
        condition: "string",
      },
      {
        date: "2023-07-16",
        condition: "string",
      },
      {
        date: "2023-07-15",
        condition: "string",
      },
    ],
  },
};

const PersonalDetailPage = () => {
  return (
    <div className="px-4 py-4">
      {/* 페이지 헤더 */}
      <header className="flex justify-between items-center">
        <div className="flex items-end gap-2">
          <div className="text-2xl font-bold">
            {personalReport.member.name} 회원님
          </div>
          <Link to={"/personal"} className="text-xs text-gray-500">
            과거 피드백 보러가기 〉
          </Link>
        </div>
        <Link to={"/alarm"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
          >
            <path
              d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z"
              fill="black"
            />
          </svg>
        </Link>
      </header>
      {/* 주간 레포트 날짜 별 슬라이드 */}
      <DateSlider />
      {/* 영상 및 이미지 섹션*/}
      <DetailSection type="media" />
      {/* 피드백 섹션 */}
      <DetailSection type="feedback" />
      {/* 센터 추천 링크 섹션 */}
      <DetailSection type="recommend" />
      {/* 통증 섹션 */}
      <DetailSection type="pain" />
      {/* 컨디션 섹션 */}
      <DetailSection type="condition" />
      {/* 후기 섹션 */}
      <CommentSection />
      {/* 공유 섹션 */}
      <ShareSection name={personalReport.member.name} />
      {/* 컴퍼니 섹션 */}
      <section className="mt-12 p-4 text-sm bg-gray-100">
        <div className="flex gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M9 6H8V7H9V6Z" fill="black" />
              <path d="M11 6H13V7H11V6Z" fill="black" />
              <path d="M16 6H15V7H16V6Z" fill="black" />
              <path d="M8 9H9V10H8V9Z" fill="black" />
              <path d="M9 12H8V13H9V12Z" fill="black" />
              <path d="M8 15H9V16H8V15Z" fill="black" />
              <path d="M13 9H11V10H13V9Z" fill="black" />
              <path d="M11 12H13V13H11V12Z" fill="black" />
              <path d="M13 15H11V16H13V15Z" fill="black" />
              <path d="M16 9H15V10H16V9Z" fill="black" />
              <path d="M15 12H16V13H15V12Z" fill="black" />
              <path d="M16 15H15V16H16V15Z" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 20C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18ZM6 5H18V19H14V17H10V19H6V5Z"
                fill="black"
              />
            </svg>
          </div>
          <div>포인티 센터</div>
        </div>
        <div className="ml-7 font-light text-gray-700">
          <div>서울시 남부순환로 1801, 라피스 빌딩 8층</div>
          <div>02-840-9002</div>
          <div className="font-bold">
            카카오톡 문의:{" "}
            <Link to={"#"} className="underline">
              포인티 센터 바로가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDetailPage;
