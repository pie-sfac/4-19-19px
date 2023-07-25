import useSWR from "swr";

interface Schedule {
  lessonTitle: string;
  lessonScheduleID: number;
  lessonType: string;
  lessonDuration: number;
  maxGroupMember: number;
  reservationStartAt: string;
  reservationEndAt: string;
  tutorName: string;
}

interface GroupLessonReservation {
  schedules: Schedule[];
}

export const groupLessonFetcher = (url: string) =>
  fetch(url).then((res) => res.json());

const GroupLessonReservationApi = (lessonScheduleId: number) => {
  const { data, error, isLoading } = useSWR<GroupLessonReservation>(
    "group-lesson-reservation",
    groupLessonFetcher
  );

  // Find: .find() 메서드는 배열 메서드로서, 주어진 조건을 만족하는 첫 번째 요소를 찾는다.
  // data 뒤의 ?(물음표): TypeScript에서 Optional Chaining(선택적 체이닝)이라는 기능을 나타낸다.
  // Optional Chaining: 객체의 속성에 안전하게 접근하기 위해 사용 e.g (data?.schedules.find())
  // Optional Chaining: 객체의 속성이 존재하지 않을 때 코드 실행 중 TypeError를 방지하기 위해 사용된다.
  // Optional Chaining: 객체 내부의 속성이 존재하지 않으면, 물음표를 사용하여 해당 속성에 접근하는 시도가 싶해하더라도 오류대신 `undefined`를 반환
  const schedule = data?.schedules.find(
    (schedule) => schedule.lessonScheduleID === lessonScheduleId
  );

  return { schedule, error, isLoading };
};

export default GroupLessonReservationApi;

// Original Code ㄱ
// interface Schedule {
//   //Schedule 을 분리해서 리스트를 뽑기위해 typescript의 tpye인 interface안에 분리해주었던 schedule을 [] 배열로 불러온다.
//   lessonTitle: "string";
//   lessonSchduleID: 0;
//   lessonType: "SINGLE";
//   lessonDuration: 0;
//   maxGroupMember: 0;
//   reservationStartAt: "2023-07-20T05:57:34.630Z";
//   reservationEndAt: "2023-07-20T05:57:34.630Z";
//   tutorName: "string";
// }

// interface GroupLessonReservation {
//   schedules: Schedule[];
// }
// export const groupLessonFetcher = (url: string) => fetch(url).then(res => res.json());
// const GroupLessonReservationApi = () => {
//   const { data, error, isLoading } = useSWR < GroupLessonReservation > ("group-lesson-reservation", groupLessonFetcher);

//   return { data, error, isLoading };
// };
// export default GroupLessonReservationApi;

// import useSWR from "swr";
