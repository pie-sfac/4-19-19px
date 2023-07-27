interface useCommentProp {
  rating: number;
  content: string;
  reportId: string;
  reportAuth?: string;
}

const useComment = ({
  rating,
  content,
  reportId,
  reportAuth,
}: useCommentProp) => {
  fetch(`http://223.130.161.221/api/v1/personal-reports/${reportId}/reviews`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Cookie JWT_PRI=${reportAuth}`,
    },
    body: JSON.stringify({ rating, content }),
  });
  return;
};

export default useComment;
