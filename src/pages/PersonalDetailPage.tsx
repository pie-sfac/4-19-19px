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
    <div className="bg-white">
      {/* 페이지 헤더 */}
      <header>
        <div>
          <div>{personalReport.member.name} 회원님</div>
          <Link to={"/personal"}>과거 피드백 보러가기</Link>
        </div>
        <Link to={"/alarm"}>🛎</Link>
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
      <section>
        <div>
          <div>🏢</div>
          <div>포인티 센터</div>
        </div>
        <div>
          <div>서울시 남부순환로 1801, 라피스 빌딩 8층</div>
          <div>02-840-9002</div>
          <div>
            카카오톡 문의: <Link to={"#"}>포인티 센터 바로가기</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDetailPage;
