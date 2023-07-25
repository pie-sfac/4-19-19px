const useLogin = async () => {
  const response = await fetch("http://223.130.161.221/mapi/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "basic dGVhbTE5OnRlYW0xOSEh",
    },
    body: JSON.stringify({ centerCode: 2399656 }),
  });
  const json = await response.json();
  return { json };
};
export default useLogin;

//

// export const fetcher = async (
//   url: string,
//   payload?: string,
// ) => {
//   const options = {
//     method: payload ? "POST" : "GET",
//     ...(payload && { body: payload }),
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(url, options).then(r => r.json());

// };
