import useSWR from "swr";

interface Schedule {
  //Schedule 을 분리해서 리스트를 뽑기위해 typescript의 tpye인 interface안에 분리해주었던 schedule을 [] 배열로 불러온다.
  lessonTitle: "string";
  lessonSchduleID: 0;
  lessonType: "SINGLE";
  lessonDuration: 0;
  maxGroupMember: 0;
  reservationStartAt: "2023-07-20T05:57:34.630Z";
  reservationEndAt: "2023-07-20T05:57:34.630Z";
  tutorName: "string";
}

interface GroupLessonReservation {
  schedules: Schedule[];
}
export const groupLessonFetcher = (url: string) => fetch(url).then(res => res.json());
const GroupLessonReservationApi = () => {
  const { data, error, isLoading } = useSWR < GroupLessonReservation > ("group-lesson-reservation", groupLessonFetcher);

  return { data, error, isLoading };
};
export default GroupLessonReservationApi;
