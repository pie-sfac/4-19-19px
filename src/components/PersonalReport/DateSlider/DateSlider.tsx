import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonalDetailPageProp } from "../../../pages/PersonalDetailPage";
import DateListBox from "./DateListBox";

const personalReports = {
  meta: {
    totalCount: 0,
    size: 0,
    count: 0,
    page: 0,
    hasMore: true,
  },
  datas: [
    {
      id: 6,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-26T06:36:46.798Z",
    },
    {
      id: 0,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      createDate: "2023-07-24T06:36:46.798Z",
    },
    {
      id: 1,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa8",
      createDate: "2023-07-23T06:36:46.798Z",
    },
    {
      id: 2,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa9",
      createDate: "2023-07-20T06:36:46.798Z",
    },
    {
      id: 3,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa0",
      createDate: "2023-07-18T06:36:46.798Z",
    },
    {
      id: 4,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
      createDate: "2023-07-11T06:36:46.798Z",
    },
    {
      id: 5,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
      createDate: "2023-07-10T06:36:46.798Z",
    },
  ],
  message: "string",
};

interface DateInfo {
  date: number;
  isData: boolean;
  id?: string;
}

interface PersonalDateInfo {
  date: number;
  id: string;
}

const DateSlider = ({ type }: PersonalDetailPageProp) => {
  const scrollBox = useRef<HTMLElement | null>(null);
  const params = useParams();
  //페이지에 표시되는 퍼스널 레포트 데이터의 날짜입니다.
  const createDate = new Date(
    type === "home"
      ? personalReports.datas[0].createDate
      : personalReports.datas.filter((data) => data.uuid === params.uuid)[0]
          .createDate
  );
  const dataDate = createDate.getDate();
  const [dates, setDates] = useState<DateInfo[]>([]);
  const [personalDates, setPersonalDates] = useState<
    PersonalDateInfo[] | undefined
  >();

  const getDate = () => {
    let dateInfoArray: DateInfo[] = [];
    const isLeapYear =
      (createDate.getFullYear() % 4 === 0 &&
        createDate.getFullYear() % 100 !== 0) ||
      createDate.getFullYear() % 400 == 0;
    for (let i = dataDate - 6; i <= dataDate + 7; i++) {
      let dateConfig: DateInfo = { date: 0, isData: false };
      personalDates!.forEach((date) => {
        let dateInfo = i;
        if (i > 28 && createDate.getMonth() === 1) {
          if (!isLeapYear) {
            dateInfo -= 28;
          } else if (isLeapYear && dateInfo > 29) {
            dateInfo -= 29;
          }
        } else if (i > 30 && [3, 5, 8, 10].includes(createDate.getMonth())) {
          dateInfo -= 30;
        } else if (
          i > 31 &&
          [0, 2, 4, 6, 7, 8, 11].includes(createDate.getMonth())
        ) {
          dateInfo -= 31;
        }
        if (i === date.date) {
          dateConfig.date = dateInfo;
          dateConfig.isData = true;
          dateConfig.id = date.id;
        } else {
          dateConfig.date = dateInfo;
        }
      });
      dateInfoArray.push({ ...dateConfig });
    }
    setDates(dateInfoArray);
  };

  const getPersonalDate = () => {
    const personalInfoArray = personalReports.datas.map((data) => {
      const personalDate = new Date(data.createDate).getDate();
      return { date: personalDate, id: data.uuid };
    });
    setPersonalDates(personalInfoArray);
  };

  useEffect(() => {
    if (scrollBox.current) {
      scrollBox.current.scrollLeft = (600 - scrollBox.current.offsetWidth) / 2;
    }
  }, [dates]);

  useEffect(() => {
    if (personalDates) {
      getDate();
    }
  }, [personalDates, params]);

  useEffect(() => {
    getPersonalDate();
  }, []);

  return (
    <section
      className="w-full0 mx-4 mt-3 p-2 border rounded-lg overflow-auto"
      ref={scrollBox}
    >
      <div className="flex justify-between w-[600px] scroll-mt-3">
        {dates?.map((date: DateInfo) => (
          <DateListBox
            key={date.date}
            id={date.id}
            isData={date.isData}
            date={date.date}
            dataDate={dataDate}
          />
        ))}
      </div>
    </section>
  );
};

export default DateSlider;
