import useSWR from "swr";

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

const useDetailReport = (id: string) => {
  const { data, error, isLoading } = useSWR<UseDetailProp>( // 데이터 구조인 UseDetailProp 을 지정
    `http://223.130.161.221/mapi/v1/personal-reports/${id}` // URL에 ${id}를 사용하여 id 값을 전달
  );
  return { data, error, isLoading };
};

export default useDetailReport;

// Original Code ㄱ
// const useDetailReport = (id: string) => {
//   // fetcher는 전역 상태로 주었음을 가정
//   const { data, error, isLoading } = useSWR(
//     `http://223.130.161.221/mapi/v1/personal-reports/3fa85f64-5717-4562-b3fc-2c963f66afa6/${id}`
//   );
//   return { data, error, isLoading };
// };
// export default useDetailReport;
