const useLessonReservation = async (lessonScheduleId: number) => {
  const response = await fetch(
    "http://223.130.161.221/mapi/v1/lesson-reservations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonScheduleId }),
    }
  );
  const json = await response.json();
  return { json };
};
export default useLessonReservation;
