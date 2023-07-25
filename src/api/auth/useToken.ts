const useToken = async ({ token }: any) => {
  // swr를 사용하지 않는 POST 방법
  const response = await fetch("http://223.130.161.221/api/v1/tokens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return { json };
};

export default useToken;
