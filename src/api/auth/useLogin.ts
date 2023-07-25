interface useLoginProp {
  username: string;
  password: string;
}

const useLogin = async ({ username, password }: useLoginProp) => {
  const token = `${username}:${password}`; //token의 데이터 구조를 백틱을 이용해 표현
  const baseEncode = btoa(token); //특정한 문자로 컨버팅을 위해 token구조를 넣어줌
  //btoa: "binary to ASCII", JS function에 사용하기위해 base64 encode를 통해 컨버팅 해주는 function
  //* React, TypeScript(`.tsx` 포함) import 없이 btoa 사용이 가능하다.
  //* 일부 JavaScript 환경에서는 btoa 사용이 불가능하다.
  //* (Node.js 에서 API를 이용해 base64encoding을 구동하려면 `Buffer`를 사용해야한다.)
  const url = "http://223.130.161.221/mapi/v1/login";
  const payload = JSON.stringify({ centerCode: 2399656 });
  //payload: body: {}구조에 HTTP POST 요청을 보내기위해 `fetch`의 구성요소로 데이터 전달을 위해 사용

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${baseEncode}`,
      //Authorization: `Basic ${value as username:password}로 정해준 변수명으로 기입
    },
    body: payload,
  });

  const json = await response.json();
  return { json, baseEncode };
};
export default useLogin;
