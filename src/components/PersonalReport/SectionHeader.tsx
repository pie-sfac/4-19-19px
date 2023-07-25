import { ReactNode } from "react";

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

interface SectionHeaderLayoutProp {
  children: ReactNode;
  isChange?: boolean;
}

interface SectionTitleProp {
  type: string;
}

interface SectionLengthProp {
  length: number;
}

interface SectionSubTitleProp {
  type: string;
}

const SectionDot = () => {
  return <span className="block w-2 h-2 bg-[#0833A0] rounded-full"></span>;
};

const SectionHeaderLayout = ({
  children,
  isChange = false,
}: SectionHeaderLayoutProp) => {
  return (
    <>
      {!isChange ? (
        <div className="flex items-center space-x-2">
          <SectionDot />
          <div className="text-sm font-medium">{children}</div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SectionDot />
            <span className="text-sm font-medium">{children}</span>
          </div>
          <span className="text-xs text-[#AEAEAE]">최근 5회</span>
        </div>
      )}
    </>
  );
};

const SectionLength = ({ length }: SectionLengthProp) => {
  return <span className="ml-1 text-[#6691FF]">{length}</span>;
};

const SectionSubTitle = ({ type }: SectionSubTitleProp) => {
  return (
    <div className="text-xs font-normal ml-4">
      {type === "pain" && (
        <span>
          {personalReport.member.name} 회원님의 통증변화 그래프입니다.
        </span>
      )}
      {type === "condition" && (
        <span>{personalReport.member.name} 회원님의 컨디션 변화입니다.</span>
      )}
    </div>
  );
};

const SectionHeader = ({ type }: SectionTitleProp) => {
  return (
    <>
      {type === "media" && (
        <SectionHeaderLayout>
          <span>{personalReport.member.name} 회원님의 영상 및 이미지</span>
          <SectionLength length={personalReport.media.items.length} />
        </SectionHeaderLayout>
      )}
      {type === "feedback" && (
        <SectionHeaderLayout>
          <span>{personalReport.writer.name} 선생님 피드백</span>
        </SectionHeaderLayout>
      )}
      {type === "recommend" && (
        <SectionHeaderLayout>
          <span>센터 추천 링크</span>
          <SectionLength length={personalReport.archiveLink.items.length} />
        </SectionHeaderLayout>
      )}
      {type === "pain" && (
        <>
          <SectionHeaderLayout isChange={true}>통증 변화</SectionHeaderLayout>
          <SectionSubTitle type={type} />
        </>
      )}
      {type === "condition" && (
        <>
          <SectionHeaderLayout isChange={true}>컨디션 변화</SectionHeaderLayout>
          <SectionSubTitle type={type} />
        </>
      )}
    </>
  );
};

export default SectionHeader;
