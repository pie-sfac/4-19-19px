const useToken = async () => {
  // swr를 사용하지 않는 POST 방법
  const response = await fetch("http://223.130.161.221/api/v1/tokens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer { token }",
    },
    //"Bearer { token }" : 엑세스 토큰을 받기 위해
  });
  const json = await response.json();
  return { json };
};

export default useToken;

// const TokenApi = () => {
//   fetch("", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
//   return;

//export const getFetcher = (url: string) => fetch(url).then(res => res.json());
//fetcher define은 특별한 method 지정이 없어도 get이 default 값이다.
//const fetcher = (..arguments) => fetch(..arguments).then(res => res.json());
//url 에는 api를 주소를 입력하지않고 api call을 사용할 페이지에서 따로 export 해서 링크를 기입해준다.
// export const tokenFetcher = (url: string) =>
//   fetch(url, {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//   }).then((res) => res.json());
// fetch("http://223.130.161.221/api/v1/tokens").then(res => res.json());
//swr fetcher 는 기본적으로 POST를 지원하지않기때문에 따로 설정을 해줘야만 한다.
//"POST" fetch 는 상세정보 수정 , 생성을 하기위해 사용
