import { Link } from "react-router-dom";
import DateSlider from "../components/PersonalReport/DateSlider/DateSlider";
import DetailSection from "../components/PersonalReport/DetailSection";
import CommentSection from "../components/PersonalReport/Comment/CommentSection";
import ShareSection from "../components/PersonalReport/Share/ShareSection";
import CompanySection from "../components/PersonalReport/Company/CompanySection";

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

export interface PersonalDetailPageProp {
  type: "home" | "detail";
}

const PersonalDetailPage = ({ type }: PersonalDetailPageProp) => {
  return (
    <div className="px-4 pb-6">
      <DateSlider type={type} />
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
      <CommentSection reportId={personalReport.uuid} />
      {/* 공유 섹션 */}
      <ShareSection name={personalReport.member.name} />
      {/* 컴퍼니 섹션 */}
      <CompanySection />
    </div>
  );
};

export default PersonalDetailPage;
