import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Prop {
  createDate: string;
  condition: string;
  uuid: string;
}

const PersonalListBox = ({ uuid, createDate, condition }: Prop) => {
  const [newDate, setNewDate] = useState<string>("");
  const getCreateDate = () => {
    const year = createDate.slice(0, 4);
    const month = createDate.slice(5, 7).padStart(2, "0");
    const day = createDate.slice(8, 10).padStart(2, "0");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = days[date.getDay()];
    const dateString = `${year}. ${month}. ${day}. ${dayOfWeek}`;
    setNewDate(dateString);
  };
  useEffect(() => {
    getCreateDate();
  }, []);
  return (
    <Link to={`/personal/${uuid}`}>
      <div className="border-2 rounded-2xl px-8 py-5 mt-4 flex justfiy-center shadow-md">
        <h1 className="text-2xl font-bold text-[#2D62EA]">{newDate}</h1>
        <span className="ml-10">{condition}</span>
      </div>
    </Link>
  );
};

export default PersonalListBox;
