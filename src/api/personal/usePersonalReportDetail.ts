import useSWR from "swr";
import useTokenCheck from "../../libs/useTokenCheck";
import { useEffect, useState } from "react";

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

const usePersonalReportDetail = (uuid: string | undefined) => {
  const ACCESS_TOKEN = "accessToken";
  const localAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const parseAccesstoken = localAccessToken
    ? JSON.parse(localAccessToken).token
    : null;

  const [token, setToken] = useState(parseAccesstoken);
  // 만료된 토큰인지 확인합니다.
  const { isCheckLoading } = useTokenCheck();

  // 토큰 체크가 끝나면 토큰을 setState에 저장합니다.
  useEffect(() => {
    setToken(JSON.parse(localAccessToken!).token);
  }, [isCheckLoading]);

  const fetcher = (url: string) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR<UseDetailProp>(
    !isCheckLoading &&
      token &&
      uuid &&
      `http://223.130.161.221/mapi/v1/personal-reports/${uuid}`,
    fetcher
  );
  return { data, error, isLoading };
};

export default usePersonalReportDetail;
