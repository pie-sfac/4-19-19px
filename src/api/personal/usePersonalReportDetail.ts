import useSWR from "swr";
import video from "../../assets/video.mp4";

interface UseDetailProp {
  uuid: string;
  writer: {
    id: number;
    name: string;
  };
  center: {
    id: number;
    name: string;
    code: string;
    phone: string;
    address: string;
    contactLink: string;
  };
  member: {
    id: number;
    name: string;
    phone: string;
    sex: "MALE" | "FEMALE"; // 성별은 MALE 또는 FEMALE만 가능하게 설정
    birthDate: string;
    createdAt: string;
    updatedAt: string;
    visitedAt: string;
  };
  reviewRating: number;
  reviewContent: string;
  comment: {
    hidden: boolean;
    content: string;
  };
  media: {
    hidden: boolean;
    items: {
      type: "IMAGE";
      uuid: string;
      url: string;
      thumbnailUrl: string;
    }[];
  };
  archiveLink: {
    hidden: boolean;
    items: {
      title: string;
      description: string;
      url: string;
      site: string;
    }[];
  };
  painHistory: {
    hidden: boolean;
    items: {
      bodyCode: number;
      histories: {
        date: string;
        level: number;
      }[];
    }[];
  };
  condition: {
    hidden: boolean;
    items: {
      date: string;
      condition: string;
    }[];
  };
}

const personalReportDummyData = {
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
        url: "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
        thumbnailUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
      },
      {
        type: "IMAGE",
        uuid: "798592bf-adaf-4fc1-9044-03aff560289a",
        url: "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
        thumbnailUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
      },
      {
        type: "VIDEO",
        uuid: "f1261e11-146b-4a11-a286-6428a3f0c114",
        url: video,
        thumbnailUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
      },
      {
        type: "VIDEO",
        uuid: "f1261e11-146b-4a11-a286-6428a3f0c118",
        url: video,
        thumbnailUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjBfMjI5/MDAxNjg3MjY2OTUxODc4.hdYEI8ZjpsdLquecHoGBycSpWPoeG4HqFNPpjH4oD54g.9z0erNsfZlQIvZAQRNpCY6DO7kdaK-sqFU_qcFWdFKEg.JPEG.rtos1806/SE%EF%BC%8Dadc76274%EF%BC%8D77b0%EF%BC%8D4c68%EF%BC%8Dbe92%EF%BC%8Ddd690f8cb1f9.jpg?type=w800",
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

const usePersonalReportDetail = (uuid: string | undefined) => {
  const { data, error, isLoading } = useSWR<UseDetailProp>(
    uuid && `http://223.130.161.221/mapi/v1/personal-reports/${uuid}`
  );
  return { data: personalReportDummyData, error, isLoading };
};

export default usePersonalReportDetail;
