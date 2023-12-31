import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isCommentState } from "../../atom";

interface handleCommentProp {
  uuid: string;
  rating: number;
  content: string;
}

const useComment = () => {
  const [message, setMessage] = useState("");
  const setIsComment = useSetRecoilState(isCommentState);

  const handleComment = async ({
    uuid,
    rating,
    content,
  }: handleCommentProp) => {
    const reportAuth = "";
    const response = await fetch(
      `http://223.130.161.221/api/v1/personal-reports/${uuid}/reviews`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Cookie: `JWT_PRI=${reportAuth}`,
        },
        body: JSON.stringify({ rating, content }),
      }
    );
    const json = await response.json();
    setMessage(json.message);
  };

  useEffect(() => {
    if (message === "정상적으로 리뷰를 등록했습니다.") {
      setIsComment({ isLoading: false, isOk: true });
    } else if (message === "존재하지 않는 퍼스널레포트입니다.") {
      setIsComment({ isLoading: false, isOk: false });
    } else if (message === "이미 작성된 후기가 존재합니다.") {
      setIsComment({ isLoading: false, isOk: false });
    }
    setMessage("");
  }, [message]);

  return { handleComment };
};

export default useComment;
