import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationBarProp {
  isNavigationDisplay: boolean;
}

interface IconStates {
  reservationClicked: boolean;
  homeClicked: boolean;
  mypageClicked: boolean;
  personalClicked: boolean;
}

const NavigationBar = ({ isNavigationDisplay }: NavigationBarProp) => {
  const [iconStates, setIconStates] = useState<IconStates>({
    reservationClicked: false,
    homeClicked: false,
    mypageClicked: false,
    personalClicked: false,
  });

  const location = useLocation();

  useEffect(() => {
    // 초기 렌더링 시점에 아이콘 색상 설정
    switch (location.pathname) {
      case "/reservation":
      case "/reservation-reserved":
        setIconStates({
          reservationClicked: true,
          homeClicked: false,
          mypageClicked: false,
          personalClicked: false,
        });
        break;
      case "/":
        setIconStates({
          reservationClicked: false,
          homeClicked: true,
          mypageClicked: false,
          personalClicked: false,
        });
        break;
      case "/mypage":
        setIconStates({
          reservationClicked: false,
          homeClicked: false,
          mypageClicked: true,
          personalClicked: false,
        });
        break;
      case "/personal":
        setIconStates({
          reservationClicked: false,
          homeClicked: false,
          mypageClicked: false,
          personalClicked: true,
        });
        break;
      default:
        setIconStates({
          reservationClicked: false,
          homeClicked: false,
          mypageClicked: false,
          personalClicked: false,
        });
        break;
    }
  }, [location.pathname]);

  return (
    isNavigationDisplay && (
      <ul className="fixed bottom-0 w-[360px] flex flex-row justify-around items-center py-3 border-t border-[#B4B4B4] bg-white">
        <Link to="/">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.99805 20.9963H6.09669C5.82054 20.9963 5.59669 20.7725 5.59669 20.4963V11.9985H2.39943C1.92954 11.9985 1.71914 11.4091 2.08281 11.1115L11.6821 3.25755C11.8663 3.10686 12.1312 3.10686 12.3153 3.25755L21.9146 11.1115C22.2783 11.4091 22.0679 11.9985 21.598 11.9985H18.4017V20.4963C18.4017 20.7725 18.1778 20.9963 17.9017 20.9963H14.998V20.9983H8.99805V20.9963ZM7.09669 10.4985V19.4963H8.99805V14.9983C8.99805 13.8937 10.3412 12.9983 11.998 12.9983C13.6549 12.9983 14.998 13.8937 14.998 14.9983V19.4963H16.9017V10.4985H18.7966L11.9987 4.93659L5.20084 10.4985H7.09669ZM13.498 19.4963V15.0276C13.4821 14.9979 13.4311 14.928 13.2873 14.8322C13.0231 14.656 12.5716 14.4983 11.998 14.4983C11.4245 14.4983 10.973 14.656 10.7088 14.8322C10.565 14.928 10.514 14.9979 10.498 15.0276V19.4963H13.498ZM13.5044 15.0435C13.5044 15.0435 13.5026 15.0405 13.5012 15.0339C13.5041 15.0401 13.5044 15.0435 13.5044 15.0435ZM10.4917 15.0435C10.4917 15.0435 10.492 15.0401 10.4949 15.0339C10.4935 15.0405 10.4917 15.0435 10.4917 15.0435Z"
                fill={iconStates.homeClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>
        <Link to="/personal">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
            >
              <path
                d="M4.5 0.5H18.5V2.5H4.5V0.5ZM4.5 8.5V6.5H18.5V8.5H4.5ZM1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0ZM1.5 6C1.89782 6 2.27936 6.15804 2.56066 6.43934C2.84196 6.72064 3 7.10218 3 7.5C3 7.89782 2.84196 8.27936 2.56066 8.56066C2.27936 8.84196 1.89782 9 1.5 9C1.10218 9 0.720644 8.84196 0.43934 8.56066C0.158035 8.27936 0 7.89782 0 7.5C0 7.10218 0.158035 6.72064 0.43934 6.43934C0.720644 6.15804 1.10218 6 1.5 6ZM4.5 14.5V12.5H18.5V14.5H4.5ZM1.5 12C1.89782 12 2.27936 12.158 2.56066 12.4393C2.84196 12.7206 3 13.1022 3 13.5C3 13.8978 2.84196 14.2794 2.56066 14.5607C2.27936 14.842 1.89782 15 1.5 15C1.10218 15 0.720644 14.842 0.43934 14.5607C0.158035 14.2794 0 13.8978 0 13.5C0 13.1022 0.158035 12.7206 0.43934 12.4393C0.720644 12.158 1.10218 12 1.5 12Z"
                fill={iconStates.personalClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>
        <Link to="/reservation">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20C20.5523 4 21 4.44772 21 5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V5C3 4.44772 3.44772 4 4 4H6V3ZM4.5 5.5V8H19.5V5.5H4.5ZM4.5 19.5H19.5V9.5H4.5V19.5ZM16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z"
                fill={iconStates.reservationClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>

        <Link to="/mypage">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM14.5 6C14.5 4.61929 13.3807 3.5 12 3.5C10.6193 3.5 9.5 4.61929 9.5 6C9.5 7.38071 10.6193 8.5 12 8.5C13.3807 8.5 14.5 7.38071 14.5 6Z"
                fill={iconStates.mypageClicked ? "#2D62EA" : "#B4B4B4"}
              />
              <path
                d="M2 20.7059C2 15.3455 6.34547 11 11.7059 11H12.2941C17.6545 11 22 15.3455 22 20.7059C22 21.4206 21.4206 22 20.7059 22H3.29412C2.5794 22 2 21.4206 2 20.7059ZM3.50253 20.5H20.4975C20.3882 16.0632 16.7573 12.5 12.2941 12.5H11.7059C7.24273 12.5 3.61179 16.0632 3.50253 20.5Z"
                fill={iconStates.mypageClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>
      </ul>
    )
  );
};

export default NavigationBar;
