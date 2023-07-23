import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const painHistory = {
  hidden: true,
  items: [
    {
      bodyCode: 0,
      histories: [
        {
          date: "2023-07-19",
          level: 3,
        },
        {
          date: "2023-07-18",
          level: 4,
        },
        {
          date: "2023-07-17",
          level: 7,
        },
        {
          date: "2023-07-16",
          level: 6,
        },
        {
          date: "2023-07-15",
          level: 2,
        },
      ],
    },
    {
      bodyCode: 1,
      histories: [
        {
          date: "2023-07-19",
          level: 2,
        },
        {
          date: "2023-07-18",
          level: 3,
        },
        {
          date: "2023-07-17",
          level: 1,
        },
        {
          date: "2023-07-16",
          level: 6,
        },
        {
          date: "2023-07-15",
          level: 2,
        },
      ],
    },
    {
      bodyCode: 2,
      histories: [
        {
          date: "2023-07-19",
          level: 7,
        },
        {
          date: "2023-07-18",
          level: 6,
        },
        {
          date: "2023-07-17",
          level: 2,
        },
        {
          date: "2023-07-16",
          level: 5,
        },
        {
          date: "2023-07-15",
          level: 2,
        },
      ],
    },
  ],
};

const PainChart = () => {
  const [bodyCode, setBodyCode] = useState(0);
  const [painData, setPainData] = useState([]);
  const onChangeOptionHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const {
      target: { value },
    } = event;
    setBodyCode(+value);
  };
  const setRechartsData = () => {
    const selectBodyCode = painHistory.items.filter(
      (item) => item.bodyCode === bodyCode
    );
    let newPainData: any = [];
    selectBodyCode[0].histories.forEach((history) => {
      const name = `${history.date.slice(2, 4)}.${history.date.slice(
        5,
        7
      )}.${history.date.slice(8, 10)}`;
      newPainData.push({ name, uv: history.level });
    });
    setPainData(newPainData.reverse());
  };
  useEffect(() => {
    setRechartsData();
  }, [bodyCode]);
  return (
    <div>
      <select name="" id="" onChange={onChangeOptionHandler}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <div>
        <LineChart width={350} height={200} data={painData}>
          <CartesianGrid vertical={false} />
          <Line
            type={"monotone"}
            dataKey={"uv"}
            dot={{ strokeWidth: 5, fill: "blue" }}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            interval={0}
            padding={{ left: 15, right: 15 }}
            className="text-[10px]"
          />
          <YAxis
            width={30}
            axisLine={false}
            tickLine={false}
            className="text-[10px]"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default PainChart;
