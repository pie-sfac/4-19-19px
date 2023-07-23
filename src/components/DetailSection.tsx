import { Link } from "react-router-dom";
import PainChart from "./PainChart";
import ConditionList from "./ConditionList";

interface PropType {
  type: "media" | "feedback" | "recommend" | "pain" | "condition";
}

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
    content:
      "회원님 어깨가 빨리 개선되기 위해 제가 오늘 하신 운동이랑 저희가 제안드리는 운동 처방 같이 드렸습니다. 꼭 회원님 하루에 10회씩 2세트씩 해주세요.",
  },
  media: {
    hidden: true,
    items: [
      {
        type: "IMAGE",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        url: "string",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
      {
        type: "VIDEO",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
        url: "string",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
      {
        type: "VIDEO",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa8",
        url: "string",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
      {
        type: "VIDEO",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa9",
        url: "string",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
      {
        type: "VIDEO",
        uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa0",
        url: "string",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
    ],
  },
  archiveLink: {
    hidden: true,
    items: [
      {
        title: "string",
        description: "string",
        url: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        site: "string",
      },
      {
        title: "string",
        description: "string",
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        site: "string",
      },
      {
        title: "string",
        description: "string",
        url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        site: "string",
      },
      {
        title: "string",
        description: "string",
        url: "https://images.unsplash.com/photo-1562771379-44b243dedac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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

const DetailSection = ({ type }: PropType) => {
  return (
    <section className="mt-6">
      {type === "media" && (
        <div className="flex items-center space-x-2">
          <span className="block w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-sm font-medium">
            {personalReport.member.name} 회원님의 영상 및 이미지
            <span className="ml-2 text-blue-500">
              {personalReport.media.items.length}
            </span>
          </span>
        </div>
      )}
      {type === "feedback" && (
        <div className="flex items-center space-x-2">
          <span className="block w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-sm font-medium">
            {personalReport.writer.name} 선생님 피드백
          </span>
        </div>
      )}
      {type === "recommend" && (
        <div className="flex items-center space-x-2">
          <span className="block w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-sm font-medium">
            센터 추천 링크
            <span className="ml-2 text-blue-500">
              {personalReport.archiveLink.items.length}
            </span>
          </span>
        </div>
      )}
      {type === "pain" && (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="block w-2 h-2 bg-blue-800 rounded-full"></span>
              <span className="text-sm font-medium">통증 변화</span>
            </div>
            <span className="text-xs text-gray-500">최근 5회</span>
          </div>
          <div className="text-xs font-normal ml-4">
            {personalReport.member.name} 회원님의 통증변화 그래프입니다.
          </div>
        </div>
      )}
      {type === "condition" && (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="block w-2 h-2 bg-blue-800 rounded-full"></span>
              <span className="text-sm font-medium">컨디션 변화</span>
            </div>
            <span className="text-xs text-gray-500">최근 5회</span>
          </div>
          <div className="text-xs font-normal ml-4">
            {personalReport.member.name} 회원님의 컨디션 변화입니다.
          </div>
        </div>
      )}
      {type === "media" && (
        <ul className="mt-2 flex space-x-2 overflow-hidden">
          {personalReport.media.items.map((item) => (
            <li key={item.uuid}>
              <Link to={"#"}>
                {item.type === "IMAGE" && (
                  <div
                    className="w-24 aspect-square rounded-md"
                    style={{
                      backgroundImage: `url(${item.thumbnailUrl})`,
                      backgroundSize: "cover",
                    }}
                  />
                )}
                {item.type === "VIDEO" && (
                  <div
                    className="w-24 aspect-square rounded-md flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(${item.thumbnailUrl})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 2.66669C8.63996 2.66669 2.66663 8.64002 2.66663 16C2.66663 23.36 8.63996 29.3334 16 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669ZM16 26.6667C10.12 26.6667 5.33329 21.88 5.33329 16C5.33329 10.12 10.12 5.33335 16 5.33335C21.88 5.33335 26.6666 10.12 26.6666 16C26.6666 21.88 21.88 26.6667 16 26.6667ZM12.6666 22L22 16L12.6666 10V22Z"
                        fill="#EBF1FF"
                      />
                    </svg>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {type === "feedback" && (
        <div className="mt-2  rounded-lg bg-gray-50">
          <p className="p-4 border border-b-0 rounded-t-lg text-sm font-normal text-gray-500">
            {personalReport.comment.content}
          </p>
          <div className="h-8 border flex justify-center items-center rounded-b-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_13_196)">
                <path
                  d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_196">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
      {type === "recommend" && (
        <ul className="mt-2 grid grid-rows-2 grid-flow-col gap-2 overflow-hidden">
          {personalReport.archiveLink.items.map((item) => (
            <li key={item.url}>
              <Link
                to={"#"}
                className="w-60 flex items-center space-x-2 border p-2 rounded-lg"
              >
                <div
                  className="w-12 h-12 rounded-md shadow-md"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                  }}
                />
                <span className="text-sm">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {type === "pain" && <PainChart />}
      {type === "condition" && <ConditionList />}
    </section>
  );
};

export default DetailSection;
