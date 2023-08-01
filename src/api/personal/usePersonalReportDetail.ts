import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";

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

const ACCESS_TOKEN = "accessToken";
const accessToken = localStorage.getItem(ACCESS_TOKEN);
const token = accessToken ? JSON.parse(accessToken).token : null;

const fetcher = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const usePersonalReportDetail = (uuid: string | undefined) => {
  const { isCheckLoading } = useTokenCheck();
  const { data, error, isLoading } = useSWR<UseDetailProp>(
    !isCheckLoading &&
      uuid &&
      `http://223.130.161.221/mapi/v1/personal-reports/${uuid}`,
    fetcher
  );
  return { data, error, isLoading };
};

export default usePersonalReportDetail;
