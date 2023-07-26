// useUserReservationData.ts

import useSWR, { responseInterface } from "swr";

interface UserData {
  users: { id: number; name: string }[];
  lessonSchedulesID: number[];
}

const exUserData: UserData = {
  users: [
    {
      id: 0,
      name: "string",
    },
  ],
  lessonSchedulesID: [2, 3],
};

export function useUserReservationData(): responseInterface<UserData, any> {
  const { data: userReservationData, mutate } = useSWR<UserData>(
    "userData",
    () => exUserData
  );
  const handleMutate = (value: number) => {
    const index = exUserData.lessonSchedulesID.indexOf(value);
    if (index === -1) {
      exUserData.lessonSchedulesID.push(value);
    } else {
      exUserData.lessonSchedulesID.splice(index, 1);
    }
    return mutate();
  };

  return {
    data: userReservationData || exUserData,
    mutate: handleMutate,
  };
}
