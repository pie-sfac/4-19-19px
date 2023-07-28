import { Link } from "react-router-dom";

const PersonalListPageHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-1">
        <Link to={`/`}>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.6732 2.58002L10.4866 1.40002L3.89322 8.00002L10.4932 14.6L11.6732 13.42L6.25322 8.00002L11.6732 2.58002Z"
                fill="#505050"
              />
            </svg>
          </p>
        </Link>
        <p className="font-bold text-xl">퍼스널 리포트</p>
      </div>
      <Link to={"/alarm"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
        >
          <path
            d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
};

export default PersonalListPageHeader;
