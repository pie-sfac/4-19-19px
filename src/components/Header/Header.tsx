import PersonalDetailPageHeader from "./PersonalDetailPageHeader";
import PersonalListPageHeader from "./PersonalListPageHeader";
import ReservationPageHeader from "./ReservationPageHeader";
import NotificationPageHeader from "./NotificationPageHeader";
import VideoPageHeader from "./VideoPageHeader";

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
      {type === "video" && <VideoPageHeader />}
    </>
  );
};

export default Header;
