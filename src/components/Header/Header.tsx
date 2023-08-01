import PersonalDetailPageHeader from "./PersonalDetailPageHeader";
import PersonalListPageHeader from "./PersonalListPageHeader";
import ReservationPageHeader from "./ReservationPageHeader";
import NotificationPageHeader from "./NotificationPageHeader";

interface HeaderProp {
  type: string;
}

const Header = ({ type }: HeaderProp) => {
  return (
    <>
      {type === "login" && null}
      {type === "personalDetail" && <PersonalDetailPageHeader />}
      {type === "personalList" && <PersonalListPageHeader />}
      {type === "reservation" && <ReservationPageHeader />}
      {type === "alarm" && <NotificationPageHeader />}
      {type === "myPage" && <NotificationPageHeader />}
    </>
  );
};

export default Header;
