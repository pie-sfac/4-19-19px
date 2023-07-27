import { Link } from "react-router-dom";

interface DateListBoxProp {
  id?: string;
  isData: boolean;
  date: number;
  dataDate: number;
}

const DateListBox = ({ id, isData, date, dataDate }: DateListBoxProp) => {
  return (
    <div>
      {isData ? (
        <Link to={`/personal/${id}`}>
          <div
            className={[
              "w-8 h-8 text-xs flex justify-center items-center rounded-full",
              date === dataDate
                ? "text-white bg-[#2D62EA]"
                : "border text-[#2D62EA] border-[#2D62EA]",
            ].join(" ")}
          >
            {date}
          </div>
        </Link>
      ) : (
        <div className="w-8 h-8 text-xs flex justify-center items-center rounded-full text-white bg-[#B4B4B4]">
          {date}
        </div>
      )}
    </div>
  );
};

export default DateListBox;
