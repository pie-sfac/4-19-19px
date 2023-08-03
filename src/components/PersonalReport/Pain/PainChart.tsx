import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const painHistory = {
  hidden: true,
  items: [
    {
      bodyCode: 1001,
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
      bodyCode: 5101,
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
      bodyCode: 6001,
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

const bodyCodes = [
  { code: 1001, title: "목", detail: "목" },
  { code: 2001, title: "몸통", detail: "가슴" },
  { code: 2002, title: "몸통", detail: "복부" },
  { code: 2003, title: "몸통", detail: "등" },
  { code: 2004, title: "몸통", detail: "허리" },
  { code: 3001, title: "좌측 팔", detail: "좌측 어깨" },
  { code: 3002, title: "좌측 팔", detail: "좌측 위쪽팔" },
  { code: 3003, title: "좌측 팔", detail: "좌측 아래쪽팔" },
  { code: 3004, title: "좌측 팔", detail: "좌측 팔꿈치" },
  { code: 3005, title: "좌측 팔", detail: "좌측 손목" },
  { code: 3006, title: "좌측 팔", detail: "좌측 손" },
  { code: 3101, title: "우측 팔", detail: "우측 어깨" },
  { code: 3102, title: "우측 팔", detail: "우측 위쪽팔" },
  { code: 3103, title: "우측 팔", detail: "우측 아래쪽팔" },
  { code: 3104, title: "우측 팔", detail: "우측 팔꿈치" },
  { code: 3105, title: "우측 팔", detail: "우측 손목" },
  { code: 3106, title: "우측 팔", detail: "우측 손" },
  { code: 4001, title: "골반", detail: "좌측 고관절" },
  { code: 4002, title: "골반", detail: "우측 고관절" },
  { code: 4003, title: "골반", detail: "엉치 및 꼬리뼈" },
  { code: 5001, title: "좌측 다리", detail: "좌측 허벅지" },
  { code: 5002, title: "좌측 다리", detail: "좌측 무릎" },
  { code: 5003, title: "좌측 다리", detail: "좌측 종아리" },
  { code: 5004, title: "좌측 다리", detail: "좌측 정강이" },
  { code: 5005, title: "좌측 다리", detail: "좌측 발목" },
  { code: 5006, title: "좌측 다리", detail: "좌측 발" },
  { code: 5101, title: "우측 다리", detail: "우측 허벅지" },
  { code: 5102, title: "우측 다리", detail: "우측 무릎" },
  { code: 5103, title: "우측 다리", detail: "우측 종아리" },
  { code: 5104, title: "우측 다리", detail: "우측 정강이" },
  { code: 5105, title: "우측 다리", detail: "우측 발목" },
  { code: 5106, title: "우측 다리", detail: "우측 발" },
  { code: 6001, title: "머리", detail: "머리" },
  { code: 6002, title: "머리", detail: "턱관절" },
];

const PainChart = () => {
  const [bodyCode, setBodyCode] = useState<number | undefined>(
    painHistory.items[0].bodyCode
  );
  const [painData, setPainData] = useState([]);
  const [options, setOptions] = useState<{ code: number; name: string }[]>([]);

  const onChangeOptionHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const {
      target: { value },
    } = event;
    setBodyCode(+value);
  };

  const setBodyCodeOption = () => {
    const BodyCodeOptions = painHistory.items.map((item) => {
      let name: string = "";
      bodyCodes.forEach((bodyCode) => {
        if (bodyCode.code === item.bodyCode) {
          name = `${bodyCode.title} - ${bodyCode.detail}`;
        }
      });
      return { code: item.bodyCode, name };
    });
    setOptions(BodyCodeOptions);
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

  useEffect(() => {
    setBodyCodeOption();
  }, []);

  return (
    <div className="mt-4 p-3 border rounded-lg">
      <div className="w-40 px-4 py-2 border text-xs rounded-md">
        <select onChange={onChangeOptionHandler}>
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
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
