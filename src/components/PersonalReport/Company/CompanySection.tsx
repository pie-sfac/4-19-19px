import { Link } from "react-router-dom";

const CompanySection = () => {
  return (
    <section className="mt-12 px-4 py-5 text-sm bg-[#F4F4F4]">
      <div className="flex items-center gap-1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M9 6H8V7H9V6Z" fill="black" />
            <path d="M11 6H13V7H11V6Z" fill="black" />
            <path d="M16 6H15V7H16V6Z" fill="black" />
            <path d="M8 9H9V10H8V9Z" fill="black" />
            <path d="M9 12H8V13H9V12Z" fill="black" />
            <path d="M8 15H9V16H8V15Z" fill="black" />
            <path d="M13 9H11V10H13V9Z" fill="black" />
            <path d="M11 12H13V13H11V12Z" fill="black" />
            <path d="M13 15H11V16H13V15Z" fill="black" />
            <path d="M16 9H15V10H16V9Z" fill="black" />
            <path d="M15 12H16V13H15V12Z" fill="black" />
            <path d="M16 15H15V16H16V15Z" fill="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 20C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18ZM6 5H18V19H14V17H10V19H6V5Z"
              fill="black"
            />
          </svg>
        </div>
        <div>포인티 센터</div>
      </div>
      <div className="ml-7 text-[#505050]">
        <div>서울시 남부순환로 1801, 라피스 빌딩 8층</div>
        <div>02-840-9002</div>
        <div className="font-bold">
          카카오톡 문의:
          <Link to={"#"} className="underline">
            포인티 센터 바로가기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
