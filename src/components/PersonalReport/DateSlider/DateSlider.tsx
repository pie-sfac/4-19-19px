import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonalDetailPageProp } from "../../../pages/PersonalDetailPage";
import DateListBox from "./DateListBox";
import usePersonalReportList from "../../../api/personal/usePersonalReportList";

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
  const [createDate, setCreateDate] = useState<Date | undefined>();
  const [dates, setDates] = useState<DateInfo[]>([]);
  const [personalDates, setPersonalDates] = useState<PersonalDateInfo[]>([]);
  const { data: listData } = usePersonalReportList();

  // getDate 함수는 createDate로부터 앞뒤로 1주일간의 날짜를 만들어 personalDates와 비교하여 데이터의 존재여부, 데이터의 id, 데이터의 날짜로 이루어진 배열을 만듭니다.
  const getDate = () => {
    let dateArray: DateInfo[] = [];
    const isLeapYear =
      (createDate!.getFullYear() % 4 === 0 &&
        createDate!.getFullYear() % 100 !== 0) ||
      createDate!.getFullYear() % 400 == 0;
    for (
      let i = createDate!.getDate() - 6;
      i <= createDate!.getDate() + 6;
      i++
    ) {
      let dateConfig: DateInfo = { date: 0, isData: false };
      personalDates!.forEach((date) => {
        let dateInfo = i;
        if (i < 1 && createDate!.getMonth() - 1 === 1) {
          if (!isLeapYear) {
            dateInfo += 28;
          } else {
            dateInfo += 29;
          }
        } else if (
          i < 1 &&
          [3, 5, 8, 10].includes(createDate!.getMonth() - 1)
        ) {
          dateInfo += 30;
        } else if (
          i < 1 &&
          [0, 2, 4, 6, 7, 8, 11].includes(createDate!.getMonth() - 1)
        ) {
          dateInfo += 31;
        } else if (i > 28 && createDate!.getMonth() === 1) {
          if (!isLeapYear) {
            dateInfo -= 28;
          } else if (isLeapYear && dateInfo > 29) {
            dateInfo -= 29;
          }
        } else if (i > 30 && [3, 5, 8, 10].includes(createDate!.getMonth())) {
          dateInfo -= 30;
        } else if (
          i > 31 &&
          [0, 2, 4, 6, 7, 8, 11].includes(createDate!.getMonth())
        ) {
          dateInfo -= 31;
        }
        if (dateInfo === date.date) {
          dateConfig.isData = true;
          dateConfig.id = date.id;
        }
        dateConfig.date = dateInfo;
      });
      dateArray.push({ ...dateConfig });
    }
    setDates(dateArray);
  };

  // getPersonalDate함수는 listData에 존재하는 데이터들의 날짜와 uuid를 모아 배열을 만듭니다.
  const getPersonalDate = () => {
    const personalDatesArray = listData!.datas.map((data) => {
      const personalDate = new Date(data.createDate).getDate();
      return { date: personalDate, id: data.uuid };
    });
    setPersonalDates(personalDatesArray);
  };

  useEffect(() => {
    if (scrollBox.current) {
      scrollBox.current.scrollLeft =
        (scrollBox.current.scrollWidth - scrollBox.current.offsetWidth) / 2;
      //scrollBox.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [dates]);

  // personalDates에 값이 존재하고 createDate를 구하면 getDate 함수를 실행합니다.
  useEffect(() => {
    if (personalDates.length > 0 && createDate) {
      getDate();
    }
  }, [personalDates, createDate]);

  // listData가 불러져 오면 getPersonalDate 함수를 실행합니다,
  useEffect(() => {
    if (listData) {
      getPersonalDate();
    }
  }, [listData]);

  //페이지에 표시되는 퍼스널 레포트 데이터의 날짜인 createDate를 구합니다.
  useEffect(() => {
    if (!listData) {
      return;
    }
    const datas = listData.datas;
    if (type === "home") {
      let latestCreateDate = new Date(0);
      for (let i = 0; i < datas.length; i++) {
        const createDate = new Date(datas[i].createDate);
        if (createDate > latestCreateDate) {
          latestCreateDate = createDate;
        }
        setCreateDate(latestCreateDate);
      }
    } else if (type === "detail") {
      setCreateDate(
        new Date(
          datas.filter((data) => data.uuid === params.uuid)[0].createDate
        )
      );
    }
  }, [listData, params]);

  return (
    <section
      className="mx-4 mt-3 p-2 border rounded-lg overflow-auto"
      ref={scrollBox}
    >
      <div className="flex justify-between w-[600px] scroll-mt-3">
        {createDate &&
          dates?.map((date: DateInfo) => (
            <DateListBox
              key={date.date}
              id={date.id}
              isData={date.isData}
              date={date.date}
              dataDate={createDate.getDate()}
            />
          ))}
      </div>
    </section>
  );
};

export default DateSlider;
