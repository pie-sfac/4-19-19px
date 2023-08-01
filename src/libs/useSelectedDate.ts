import useSWR from "swr";

let selectedDate = new Date();

export function useSelectedDate() {
  const { data, mutate } = useSWR<Date>("selectedDate", () => selectedDate);

  return {
    data: data || selectedDate,
    mutate: (value: Date) => {
      selectedDate = value;
      return mutate();
    },
  };
}
