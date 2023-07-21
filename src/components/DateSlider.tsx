import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      createDate: "2023-07-20T06:36:46.798Z",
    },
    {
      id: 0,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-19T06:36:46.798Z",
    },
    {
      id: 1,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-17T06:36:46.798Z",
    },
    {
      id: 2,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-16T06:36:46.798Z",
    },
    {
      id: 3,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-14T06:36:46.798Z",
    },
    {
      id: 4,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-11T06:36:46.798Z",
    },
    {
      id: 5,
      uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-07-10T06:36:46.798Z",
    },
  ],
  message: "string",
};

interface DateConfig {
  isData: boolean;
  id?: number;
}

interface DateInfo extends DateConfig {
  date: number;
}

interface PersonalDateInfo {
  date: number;
  id: number;
}

const DateSlider = () => {
  const date = new Date();
  const todayDate = date.getDate();
  const [dates, setDates] = useState<DateInfo[]>([]);
  const [personalDates, setPersonalDates] = useState<
    PersonalDateInfo[] | undefined
  >();

  const getDate = () => {
    let dateInfoArray: DateInfo[] = [];
    for (let i = todayDate - 6; i <= todayDate; i++) {
      let dateConfig: DateConfig = { isData: false };
      personalDates!.forEach((date) => {
        if (i === date.date) {
          dateConfig.isData = true;
          dateConfig.id = date.id;
        }
      });
      dateInfoArray.push({ date: i, ...dateConfig });
    }
    setDates(dateInfoArray);
  };

  const getPersonalDate = () => {
    const personalInfoArray = personalReports.datas.map((data) => {
      const personalDate = new Date(data.createDate).getDate();
      return { date: personalDate, id: data.id };
    });
    setPersonalDates(personalInfoArray);
  };

  useEffect(() => {
    if (personalDates) {
      getDate();
    }
  }, [personalDates]);

  useEffect(() => {
    getPersonalDate();
  }, []);

  return (
    <section>
      <div>
        {dates?.map((date: DateInfo) => (
          <Link key={date.date} to={`/personal/${date.id}`}>
            <div
              style={
                date.isData
                  ? date.date === todayDate
                    ? {
                        height: 30,
                        width: 30,
                        color: "white",
                        backgroundColor: "blue",
                        borderRadius: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        height: 30,
                        width: 30,
                        color: "blue",
                        border: "1px solid blue",
                        borderRadius: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                  : {
                      height: 30,
                      width: 30,
                      color: "white",
                      backgroundColor: "gray",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
              }
            >
              {date.date}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DateSlider;
