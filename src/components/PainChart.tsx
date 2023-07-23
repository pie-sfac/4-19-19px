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
    <div className="mt-3 p-3 border rounded-lg">
      <div className="w-40 px-4 py-2 border text-xs rounded-md">
        <select onChange={onChangeOptionHandler}>
          <option value={0}>어깨 전면</option>
          <option value={1}>허리 전면</option>
          <option value={2}>하체</option>
        </select>
      </div>
      <div className="mt-3 text-gray-300">
        <LineChart width={300} height={200} data={painData}>
          <CartesianGrid vertical={false} stroke="#e7e7e7" />
          <Line
            type={"monotone"}
            dataKey={"uv"}
            stroke="#BFD1FF"
            strokeWidth={2}
            dot={{ stroke: "#6691FF", strokeWidth: 5, fill: "#6691FF" }}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            height={15}
            interval={0}
            padding={{ left: 15, right: 15 }}
            stroke="#aeaeae"
            className="text-[10px]"
          />
          <YAxis
            width={10}
            axisLine={false}
            tickLine={false}
            stroke="#aeaeae"
            className="text-[10px]"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default PainChart;
