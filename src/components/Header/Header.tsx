import { useLocation } from "react-router-dom"; // useState를 추가합니다
import PersonalDetailPageHeader from "./PersonalDetailPageHeader";
import PersonalListPageHeader from "./PersonalListPageHeader";
import ReservationPageHeader from "./ReservationPageHeader";
import NotificationPageHeader from "./NotificationPageHeader";

export const defaultHeaderStyle = "flex justify-between items-center px-8 py-6";

const Header = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <PersonalDetailPageHeader />}
      {location.pathname.includes("/personal/") && <PersonalDetailPageHeader />}
      {location.pathname === "/personal" && <PersonalListPageHeader />}
      {location.pathname === "/reservation" && <ReservationPageHeader />}
      {location.pathname === "/reservation-reserved" && (
        <ReservationPageHeader />
      )}
      {location.pathname === "/alarm" && <NotificationPageHeader />}
      {location.pathname === "/mypage" && <NotificationPageHeader />}
    </>
  );
};

export default Header;
