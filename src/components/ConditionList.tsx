import Condition from "./Condition";

const condition = {
  hidden: true,
  items: [
    {
      date: "2023-07-22",
      condition: "매우좋음",
    },
    {
      date: "2023-07-21",
      condition: "좋음",
    },
    {
      date: "2023-07-19",
      condition: "보통",
    },
    {
      date: "2023-07-16",
      condition: "나쁨",
    },
    {
      date: "2023-07-15",
      condition: "매우나쁨",
    },
  ],
};

const ConditionList = () => {
  return (
    <ul>
      {condition.items.map((item) => (
        <Condition
          key={item.date}
          date={item.date.replaceAll("-", ".")}
          condition={item.condition}
        />
      ))}
    </ul>
  );
};

export default ConditionList;
