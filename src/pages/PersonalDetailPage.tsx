import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import DateSlider from "../components/PersonalReport/DateSlider/DateSlider";
import DetailSection from "../components/PersonalReport/DetailSection";
import CommentSection from "../components/PersonalReport/Comment/CommentSection";
import ShareSection from "../components/PersonalReport/Share/ShareSection";
import CompanySection from "../components/PersonalReport/Company/CompanySection";
import usePersonalReportList from "../api/personal/usePersonalReportList";
import usePersonalReportDetail from "../api/personal/usePersonalReportDetail";
import adImage from "../assets/ad-image.png";

const personalReport = {
  uuid: "1dc354cd-228e-4219-bb0a-2fd9be78c064",
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
    content:
      "회원님 어깨가 빨리 개선되기 위해 제가 오늘 하신 운동이랑 저희가 제안드리는 운동 처방 같이 드렸습니다. 꼭 회원님 하루에 10회씩 2세트씩 해주세요.",
  },
  media: {
    hidden: true,
    items: [
      {
        type: "IMAGE",
        uuid: "798592bf-adaf-4fc1-9044-03aff560289c",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/798592bf-adaf-4fc1-9044-03aff560289c.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/798592bf-adaf-4fc1-9044-03aff560289c.png",
      },
      {
        type: "VIDEO",
        uuid: "f1261e11-146b-4a11-a286-6428a3f0c118",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/video/f1261e11-146b-4a11-a286-6428a3f0c118.mp4",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/video/thumbnail/f1261e11-146b-4a11-a286-6428a3f0c118.png",
      },
      {
        type: "VIDEO",
        uuid: "e260ec93-b036-4bde-a2a4-ed09372f0a71",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/video/e260ec93-b036-4bde-a2a4-ed09372f0a71.mp4",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/video/thumbnail/e260ec93-b036-4bde-a2a4-ed09372f0a71.png",
      },
      {
        type: "VIDEO",
        uuid: "f0dee9dc-12f6-402b-9903-4a79a653f836",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/video/f0dee9dc-12f6-402b-9903-4a79a653f836.mp4",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/video/thumbnail/f0dee9dc-12f6-402b-9903-4a79a653f836.png",
      },
      {
        type: "IMAGE",
        uuid: "8ddb31b9-07c3-4213-bfc6-046e22daf1b4",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/8ddb31b9-07c3-4213-bfc6-046e22daf1b4.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/8ddb31b9-07c3-4213-bfc6-046e22daf1b4.png",
      },
      {
        type: "IMAGE",
        uuid: "9b3d8a27-1344-4abb-9dc9-4cc6c1bf97c8",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/9b3d8a27-1344-4abb-9dc9-4cc6c1bf97c8.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/9b3d8a27-1344-4abb-9dc9-4cc6c1bf97c8.png",
      },
      {
        type: "IMAGE",
        uuid: "9c4b6825-8ed8-467d-9389-d28f8a87d925",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/9c4b6825-8ed8-467d-9389-d28f8a87d925.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/9c4b6825-8ed8-467d-9389-d28f8a87d925.png",
      },
      {
        type: "IMAGE",
        uuid: "2bed860e-1821-42b8-b09f-a448f128ee1b",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/2bed860e-1821-42b8-b09f-a448f128ee1b.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/2bed860e-1821-42b8-b09f-a448f128ee1b.png",
      },
      {
        type: "IMAGE",
        uuid: "59bdb665-a5c8-4610-8d9a-9c5e697df9ea",
        url: "https://canpstiukrhg15427954.cdn.ntruss.com/image/59bdb665-a5c8-4610-8d9a-9c5e697df9ea.png",
        thumbnailUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/59bdb665-a5c8-4610-8d9a-9c5e697df9ea.png",
      },
    ],
  },
  archiveLink: {
    hidden: true,
    items: [
      {
        title: "Harry Spotter - The boy who lifted",
        description:
          "In the world of Harry Potter where everyone is muscular.#ai #midjourney #harrypotter #harryspotter #gym #muscle Track: Infraction - Cyberphonkhttps://youtu.b...",
        url: "https://youtu.be/w2eW6jezNfU",
        site: "YOUTUBE",
      },
      {
        title: "Harry Potter by Balenciaga",
        description:
          "Patreon to support this channel, Hi-res images or just for prompts: https://www.patreon.com/user?u=87233464Instagram: https://www.instagram.com/demonflyingfo...",
        url: "https://youtu.be/iE39q-IKOzA",
        site: "YOUTUBE",
      },
      {
        title:
          "Harry FATter | The entire Harry Potter universe has become fat by AI",
        description:
          "The Harry Potter universe in which everyone can't stop eating!I made this video using several AI tools like: ChatGPT https://chat.openai.com/Midjourney 5.1 h...",
        url: "https://youtu.be/pgdXJ8kil1A",
        site: "YOUTUBE",
      },
      {
        title: "Harry Potter by Gucci",
        description: "#ai #harrypotter #gucci",
        url: "https://youtu.be/2EOKwxnoUPQ",
        site: "YOUTUBE",
      },
      {
        title: "Harry Potter by BURBERRY",
        description: "#ai #harrypotter #balenciaga",
        url: "https://youtu.be/P8eFebPV8fc",
        site: "YOUTUBE",
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
  const params = useParams();
  const [uuid, setUuid] = useState<string | undefined>();
  const { data: ListData } = usePersonalReportList();
  const { data: DetailData } = usePersonalReportDetail(uuid);

  useEffect(() => {
    if (!ListData || ListData.datas.length === 0) {
      return;
    }
    if (type === "home") {
      const datas = ListData.datas;
      let latestUuid;
      let latestCreateDate = new Date(0);
      datas.forEach((item) => {
        const createDate = new Date(item.createDate);
        if (createDate > latestCreateDate) {
          latestCreateDate = createDate;
          latestUuid = item.uuid;
        }
      });
      setUuid(latestUuid);
    }
  }, [type, ListData]);

  useEffect(() => {
    if (!params) {
      return;
    }
    if (type === "detail") {
      setUuid(params.uuid);
    }
  }, [type, params]);

  return (
    <Layout type="personalDetail">
      <Link
        to={"https://www.wadiz.kr/web/maker/detail/1748046"}
        className="block h-14 bg-gray-100 bg-cover"
        style={{ backgroundImage: `url(${adImage})` }}
      ></Link>
      <DateSlider type={type} />
      {/* 영상 및 이미지 섹션*/}
      <DetailSection type="media" />
      {/* 피드백 섹션 */}
      <DetailSection type="feedback" />
      {/* 센터 추천 링크 섹션 */}
      <DetailSection type="recommend" />
      <div className="h-3 mt-7 bg-gray-100"></div>
      {/* 통증 섹션 */}
      <DetailSection type="pain" />
      {/* 컨디션 섹션 */}
      <DetailSection type="condition" />
      <div className="h-3 mt-7 bg-gray-100"></div>
      {/* 후기 섹션 */}
      <CommentSection reportId={personalReport.uuid} />
      <div className="h-3 mt-7 bg-gray-100"></div>
      {/* 공유 섹션 */}
      <ShareSection name={personalReport.member.name} />
      {/* 컴퍼니 섹션 */}
      <CompanySection />
    </Layout>
  );
};

export default PersonalDetailPage;
