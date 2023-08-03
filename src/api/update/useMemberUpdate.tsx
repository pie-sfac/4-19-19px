import useSWR from "swr";

interface MemberInfoProp {
  name: string;
  birthDate: string;
  phone: string;
  sex: string;
  job: string;
  acquisitionFunnel: string;
}

const useSetting = (memberId: number) => {
  const { data, error, isValidating } = useSWR<MemberInfoProp>(
    `http://223.130.161.221/mapi/v1/personal-reports/${memberId}`
  );

  const useSettingFix = async (updatedData: Partial<MemberInfoProp>) => {
    try {
      const response = await fetch(
        `http://223.130.161.221/mapi/v1/personal-reports/${memberId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error("???");
      }
    } catch (error) {
      console.error("Error");
    }
  };

  return { data, error, isValidating, useSettingFix };
};

export default useSetting;
