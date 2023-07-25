interface LogoutData {
  message: string;
}

const useLogout = async (token: string) => {
  const response = await fetch("http://223.130.161.221/mapi/v1/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return { json };
};

export default useLogout;
