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
    content: "해당 데이터가 피드백 데이터입니다.",
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
    <section>
      {type === "media" && (
        <div>
          <span
            style={{
              display: "block",
              width: 10,
              height: 10,
              backgroundColor: "black",
              borderRadius: 50,
            }}
          ></span>
          <span>
            {personalReport.member.name} 회원님의 영상 및 이미지
            <span>{personalReport.media.items.length}</span>
          </span>
        </div>
      )}
      {type === "feedback" && (
        <div>
          <span
            style={{
              display: "block",
              width: 10,
              height: 10,
              backgroundColor: "black",
              borderRadius: 50,
            }}
          ></span>
          <span>{personalReport.writer.name} 선생님 피드백</span>
        </div>
      )}
      {type === "recommend" && (
        <div>
          <span
            style={{
              display: "block",
              width: 10,
              height: 10,
              backgroundColor: "black",
              borderRadius: 50,
            }}
          ></span>
          <span>
            센터 추천 링크
            <span>{personalReport.archiveLink.items.length}</span>
          </span>
        </div>
      )}
      {type === "pain" && (
        <div>
          <div>
            <div>
              <span
                style={{
                  display: "block",
                  width: 10,
                  height: 10,
                  backgroundColor: "black",
                  borderRadius: 50,
                }}
              ></span>
              <span>통증 변화</span>
            </div>
            <span>최근 5회</span>
          </div>
          <div>
            {personalReport.member.name} 회원님의 통증변화 그래프입니다.
          </div>
        </div>
      )}
      {type === "condition" && (
        <div>
          <div>
            <span>
              <span
                style={{
                  display: "block",
                  width: 10,
                  height: 10,
                  backgroundColor: "black",
                  borderRadius: 50,
                }}
              ></span>
              컨디션 변화
            </span>
            <div>최근 5회</div>
          </div>
          <div>{personalReport.member.name} 회원님의 컨디션 변화입니다.</div>
        </div>
      )}
      {type === "media" && (
        <ul>
          {personalReport.media.items.map((item) => (
            <li key={item.uuid}>
              <Link to={"#"}>
                {item.type === "IMAGE" && (
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      backgroundImage: `url(${item.thumbnailUrl})`,
                      backgroundSize: "cover",
                    }}
                  />
                )}
                {item.type === "VIDEO" && (
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(${item.thumbnailUrl})`,
                      backgroundSize: "cover",
                    }}
                  >
                    ▶︎
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {type === "feedback" && (
        <div>
          <p>{personalReport.comment.content}</p>
          <div>▾</div>
        </div>
      )}
      {type === "recommend" && (
        <ul>
          {personalReport.archiveLink.items.map((item) => (
            <li key={item.url}>
              <Link to={"#"}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                  }}
                />
                <span>{item.description}</span>
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
