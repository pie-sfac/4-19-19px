import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface IconStates {
  reservationClicked: boolean;
  homeClicked: boolean;
  mypageClicked: boolean;
}

const NavigationBar: React.FC = () => {
  const [iconStates, setIconStates] = useState<IconStates>({
    reservationClicked: false,
    homeClicked: false,
    mypageClicked: false,
  });

  const handleIconClick = (icon: keyof IconStates) => {
    setIconStates({ ...iconStates, [icon]: true });
  };

  const location = useLocation();

  useEffect(() => {
    // 초기 렌더링 시점에 아이콘 색상 설정
    switch (location.pathname) {
      case "/reservation":
        setIconStates({
          reservationClicked: true,
          homeClicked: false,
          mypageClicked: false,
        });
        break;
      case "/":
        setIconStates({
          reservationClicked: false,
          homeClicked: true,
          mypageClicked: false,
        });
        break;
      case "/mypage":
        setIconStates({
          reservationClicked: false,
          homeClicked: false,
          mypageClicked: true,
        });
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    location.pathname !== "/login" && (
      <ul className="fixed bottom-0 w-[390px] flex flex-row justify-around py-3 border-t border-[#B4B4B4] bg-white">
        <Link
          to="/reservation"
          onClick={() => handleIconClick("reservationClicked")}
        >
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
                fill={iconStates.reservationClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>
        <Link to="/" onClick={() => handleIconClick("homeClicked")}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
            >
              <path
                d="M8.5 17V11H12.5V17H17.5V9H20.5L10.5 0L0.5 9H3.5V17H8.5Z"
                fill={iconStates.homeClicked ? "#2D62EA" : "#B4B4B4"}
              />
            </svg>
          </li>
        </Link>
        <Link to="/mypage" onClick={() => handleIconClick("mypageClicked")}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.5 0.5C9.56087 0.5 10.5783 0.921427 11.3284 1.67157C12.0786 2.42172 12.5 3.43913 12.5 4.5C12.5 5.56087 12.0786 6.57828 11.3284 7.32843C10.5783 8.07857 9.56087 8.5 8.5 8.5C7.43913 8.5 6.42172 8.07857 5.67157 7.32843C4.92143 6.57828 4.5 5.56087 4.5 4.5C4.5 3.43913 4.92143 2.42172 5.67157 1.67157C6.42172 0.921427 7.43913 0.5 8.5 0.5ZM8.5 10.5C12.92 10.5 16.5 12.29 16.5 14.5V16.5H0.5V14.5C0.5 12.29 4.08 10.5 8.5 10.5Z"
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
